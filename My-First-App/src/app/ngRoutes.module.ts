import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";

const appRouter: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user/:id', component: UsersComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter)
    ],
    exports: [RouterModule]
})
export class NgRoutesModule {

}