import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingComponent } from "./shopping/shopping.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipe' , pathMatch:'full'},
    { path: 'recipe', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}