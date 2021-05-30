import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../receipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onAddToShoppinglist() {
    this.recipeService.addIngToShopList(this.recipe.ingrediants)
  }
}
