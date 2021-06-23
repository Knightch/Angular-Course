import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../Ingredient/data-storage.service";
import { Recipe } from "./receipes.model";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageService: DataStorageService, private resService: RecipeService) { }

    resolve(route: ActivatedRouteSnapshot, states: RouterStateSnapshot) {
        const recipes = this.resService.getRecipe();

        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipe();
        } else {
            return recipes;
        }

    }
}