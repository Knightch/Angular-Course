import { registerLocaleData } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";

export interface AuthResponseData {
    localId: string;
    idToken: string,
    email: string,
    refreshToken: string,
    expiresin: string,
    localled: string,
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router) { }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpiratioDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpiratioDate)
        );

        if (loadedUser.token) {
            this.user.next(loadedUser);
        }
    }

    logOut() {
        this.user.next(null);
        this.router.navigate(['/auth']);
    }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc8t04BN1B7JTIO2JrEzYgD8QWVBOAF_k',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(catchError(this.handleError), tap(resData => {
                const expirationDate = new Date(new Date().getTime() + +resData.expiresin * 1000);
                const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
                this.user.next(user);
                localStorage.setItem('userData', JSON.stringify(user));
            }
            ));
    }
    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc8t04BN1B7JTIO2JrEzYgD8QWVBOAF_k',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
            .pipe(catchError(this.handleError), tap(resData => {
                const expirationDate = new Date(new Date().getTime() + +resData.expiresin * 1000);
                const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
                this.user.next(user);
                localStorage.setItem('userData', JSON.stringify(user));
            }

            ));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXITS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct';
                break;
        }
        return throwError(errorMessage);
    }
}