import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedPosts: Post[] = [];
  constructor(private http: HttpClient) { }
  
  onCreatePost(postData: Post) {
    // Send Http request
    this.http.post<{name:string}>('https://ng-complete-guide-ded1b-default-rtdb.firebaseio.com/posts.json', postData).subscribe(
      responseData => {
        console.log(responseData);
      }
    )
  }
  ngOnInit() {
    this.fetchPosts();
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get('https://ng-complete-guide-ded1b-default-rtdb.firebaseio.com/posts.json')
      .pipe(map((responseData:{[key:string]:Post}) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        this.loadedPosts = posts;
      });
  }

}
