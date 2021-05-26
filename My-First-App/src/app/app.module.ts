import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { bassicHighLight } from './basic-highlight/basic-highlight.directive';
import { BetterHighLightDirective } from './BetterHighlight/better-high-light.directive';
import { UnlessDirective } from './unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    bassicHighLight,
    BetterHighLightDirective,
    UnlessDirective],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
