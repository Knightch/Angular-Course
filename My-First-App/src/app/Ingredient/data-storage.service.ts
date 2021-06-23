import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService) { }
        
    storageRecipes() {
        const recipes = this.recipeService.getRecipe();
        this.http.put('https://ng-course-recipe-book-5c3ee-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
            Response => {
                console.log(Response);
            }
        )
  }  

}