import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./Auth/auth.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingComponent } from "./shopping/shopping.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipesDetailsComponent, resolve: [RecipesResolverService] },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },

    { path: 'shopping-list', component: ShoppingComponent },
    { path: 'auth', component: AuthComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}