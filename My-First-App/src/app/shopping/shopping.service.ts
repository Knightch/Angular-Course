
import { Subject } from "rxjs";
import { Ingrediant } from "../Ingredient/ingredients.model";

export class ShoppingService {
    ingrediantChanged = new Subject<Ingrediant[]>();
    startedEditing = new Subject<number>();
    private ingrediant: Ingrediant[] = [
        new Ingrediant('Apple', 5),
        new Ingrediant('Orange', 10)
    ];
    getIngrediant() {
        return this.ingrediant.slice();
    }
    getIngredient(index:number) {
        return this.ingrediant[index];
    }

    addIngrediant(ingrediant: Ingrediant) {
        this.ingrediant.push(ingrediant)
        this.ingrediantChanged.next(this.ingrediant.slice());
    }
    addIngredients(ingredients: Ingrediant[]) {
        this.ingrediant.push(...ingredients);
        this.ingrediantChanged.next(this.ingrediant.slice())
    }

}