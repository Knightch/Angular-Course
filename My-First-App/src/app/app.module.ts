import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipes } from './shorten.pipes';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ShortenPipes,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
