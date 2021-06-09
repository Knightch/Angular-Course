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
import { RouterModule, Routes } from '@angular/router';
import { ServerService } from './servers/server.service';

const appRouter: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'server/:id/edit', component: EditServerComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    ServersComponent,
    UsersComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
