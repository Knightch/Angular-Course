import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  activated = false;
  private activeSubscribe: Subscription;
  constructor(private appservice:AppService){}
  ngOnInit() {
    this.activeSubscribe=this.appservice.activatedEvent.subscribe(
      (didActive) => {
        this.activated = didActive;
      }
    );
  }
  ngOnDestroy() {
    this.activeSubscribe.unsubscribe();
  }
}
