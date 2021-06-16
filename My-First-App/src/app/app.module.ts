import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NgRoutesModule } from './ngRoutes.module';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
