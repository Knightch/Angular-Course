import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../Ingredient/data-storage.service";
import { Recipe } from "./receipes.model";

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorageService: DataStorageService) { }
    resolve(route: ActivatedRouteSnapshot, states: RouterStateSnapshot) {
        return this.dataStorageService.fetchRecipe();
    }
}