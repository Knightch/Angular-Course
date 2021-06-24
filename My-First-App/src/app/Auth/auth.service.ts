import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface AuthResponseData {
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

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc8t04BN1B7JTIO2JrEzYgD8QWVBOAF_k',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .pipe(catchError(errorRes => {
                let errorMessage = 'An unknown error occured!';
                if (!errorRes.error || !errorRes.error.error) {
                    return throwError(errorRes);
                }
                switch (errorRes.error.error.message) {
                    case 'EMAIL_EXITS':
                        errorMessage = 'This email exists already';
                }
                return throwError(errorMessage);
            }))
    }
    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc8t04BN1B7JTIO2JrEzYgD8QWVBOAF_k',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
    }
}