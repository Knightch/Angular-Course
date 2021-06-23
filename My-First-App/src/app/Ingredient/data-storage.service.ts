import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/receipes.model";
import { RecipeService } from "../recipes/recipe.service";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storageRecipes() {
        const recipes = this.recipeService.getRecipe();
        this.http.put('https://ng-course-recipe-book-5c3ee-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
            Response => {
                console.log(Response);
            }
        )
    }
    fetchRecipe() {
        this.http.get<Recipe[]>('https://ng-course-recipe-book-5c3ee-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingrediants: recipe.ingrediants ? recipe.ingrediants : [] };
                });
            }))
            .subscribe(
                recipes => {
                    this.recipeService.setRecipes(recipes);
                }
            )
    }

}