import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { postService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedPosts: Post[] = [];
  isFetching = false;
  constructor(private http: HttpClient,private pSer:postService) { }
  
  onCreatePost(postData: Post) {
    // Send Http request
    this.pSer.createAndStorePost(postData.title, postData.content);
  }
  ngOnInit() {
    this.isFetching = true;
    this.pSer.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    })
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.pSer.fetchPosts().subscribe(post => {
      this.isFetching = false;
      this.loadedPosts = post;
    });
  }

  onClearPosts() {
    // Send Http request
  }

 

}
