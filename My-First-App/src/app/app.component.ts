import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { postService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  constructor(private http: HttpClient, private pSer: postService) { }

  onCreatePost(postData: Post) {
    // Send Http request
    this.pSer.createAndStorePost(postData.title, postData.content);
  }
  ngOnInit() {
    this.errorSub = this.pSer.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.pSer.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    })

  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.pSer.fetchPosts().subscribe(post => {
      this.isFetching = false;
      this.loadedPosts = post;
    }, error => {
      this.error = error.message;
      console.log(this.error);
    });

  }

  onClearPosts() {
    // Send Http request
    this.pSer.deletePosts().subscribe(
      () => {
        this.loadedPosts = [];
      }
    )
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }


}
