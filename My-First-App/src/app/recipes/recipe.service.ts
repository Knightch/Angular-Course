import {  Injectable } from "@angular/core";
import { Ingrediant } from "../Ingredient/ingredients.model";
import { ShoppingService } from "../shopping/shopping.service";
import { Recipe } from "./receipes.model";
@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Biryani',
            'Hydrabadi Biryani',
            'https://embed.widencdn.net/img/mccormick/mjdxosbfzz/1125x1125px/HYDERABADI-BIRYANI.jpg?crop=true&anchor=749,0&q=80&color=ffffffff&u=qwwekl',
            [
                new Ingrediant('Rice', 2),
                new Ingrediant('Meat', 1),
                new Ingrediant('Spices', 2)
            ]),
        new Recipe('Biryani',
            'A nice biryani that i love most',
            'https://img-global.cpcdn.com/recipes/991bc444a26af47e/751x532cq70/tandoori-chicken-biryani-recipe-main-photo.jpg ',
            [
                new Ingrediant('Rice', 1),
                new Ingrediant('Meat', 1),
                new Ingrediant('Spices', 1)
            ]),
        new Recipe('Ice-Cream',
            ' i love ice-cream',
            'https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg ',
            [
                new Ingrediant('Cream', 1),
                new Ingrediant('Milk', 1),
                new Ingrediant('Ice', 1)
            ])
    ];
    constructor(private slService: ShoppingService) { }

    getRecipe() {
        return this.recipes.slice();
    }
    getRecipes(index: number) {
        return this.recipes[index];
    }
    addIngToShopList(ingredians: Ingrediant[]) {
        this.slService.addIngredients(ingredians);
    }
}