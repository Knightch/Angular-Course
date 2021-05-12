import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   serverElements = [{name:'NewserverAman', type:'server',content:'it is a testing server' }]
}
