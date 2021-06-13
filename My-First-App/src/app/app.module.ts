import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServerService } from './servers/server.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgRoutesModule } from './ngRoutes.module';
import { AuthGuard } from './authGuard.service';
import { AuthService } from './auth.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    ServersComponent,
    UsersComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgRoutesModule
  ],
  providers: [ServerService, AuthGuard, AuthService, canDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
