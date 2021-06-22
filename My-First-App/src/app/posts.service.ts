import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class postService {
    error = new Subject<string>()

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };

        this.http.post<{ name: string }>('https://ng-complete-guide-ded1b-default-rtdb.firebaseio.com/posts.json', postData).subscribe(
            responseData => {
                console.log(responseData);
            },
            error => {
                this.error.next(error.message);
            }
        )
    }
    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');
        return this.http.get('https://ng-complete-guide-ded1b-default-rtdb.firebaseio.com/posts.json', {
            headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
            params: searchParams
        })
            .pipe(map((responseData: { [key: string]: Post }) => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key });
                    }
                }
                return postsArray;
            }),
                catchError(errorRs => {
                    return throwError(errorRs);
                })
            );
    }

    deletePosts() {
        return this.http.delete('https://ng-complete-guide-ded1b-default-rtdb.firebaseio.com/posts.json');
    }
}