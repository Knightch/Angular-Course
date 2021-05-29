import { Recipe } from "./receipes.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Biryani', 'A nice biryani that i love most', 'https://embed.widencdn.net/img/mccormick/mjdxosbfzz/1125x1125px/HYDERABADI-BIRYANI.jpg?crop=true&anchor=749,0&q=80&color=ffffffff&u=qwwekl'),
        new Recipe('Biryani', 'A nice biryani that i love most', 'https://img-global.cpcdn.com/recipes/991bc444a26af47e/751x532cq70/tandoori-chicken-biryani-recipe-main-photo.jpg '),
        new Recipe('Ice-Cream', ' i love ice-cream', 'https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg ')
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}