import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/receipes.model";
import { RecipeService } from "../recipes/recipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../Auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storageRecipes() {
        const recipes = this.recipeService.getRecipe();
        this.http.put('https://ng-course-recipe-book-5c3ee-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
            Response => {
                console.log(Response);
            }
        )
    }
    fetchRecipe() {
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            return this.http.get<Recipe[]>('https://ng-course-recipe-book-5c3ee-default-rtdb.firebaseio.com/recipes.json',
                {
                    params: new HttpParams().set('auth', user.token)
                }
            );
        }),
            map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe,
                        ingrediants: recipe.ingrediants ? recipe.ingrediants : []
                    };
                });
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }

}