import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedPosts = [];
  constructor(private http: HttpClient) { }
  
  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://ng-complete-guide-ded1b-default-rtdb.firebaseio.com/posts.json', postData).subscribe(
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
      .subscribe(posts => {
        console.log(posts)
      });
  }

}
