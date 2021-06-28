import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./Auth/auth.component";
import { ShoppingComponent } from "./shopping/shopping.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    

    { path: 'shopping-list', component: ShoppingComponent },
    { path: 'auth', component: AuthComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}