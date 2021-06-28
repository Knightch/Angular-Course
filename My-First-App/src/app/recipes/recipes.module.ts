import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesDetailsComponent } from "./recipes-details/recipes-details.component";
import { RecipesItemComponent } from "./recipes-list/recipes-item/recipes-item.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesDetailsComponent,
        RecipesListComponent,
        RecipesItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [RouterModule, CommonModule , ReactiveFormsModule],
    exports: [
        RecipesComponent,
        RecipesDetailsComponent,
        RecipesListComponent,
        RecipesItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ]
})
export class RecipesModule {

}