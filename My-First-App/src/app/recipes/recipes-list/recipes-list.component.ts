import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../receipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Biryani','A nice biryani that i love most','https://embed.widencdn.net/img/mccormick/mjdxosbfzz/1125x1125px/HYDERABADI-BIRYANI.jpg?crop=true&anchor=749,0&q=80&color=ffffffff&u=qwwekl'),
    new Recipe('Biryani', 'A nice biryani that i love most', 'https://img-global.cpcdn.com/recipes/991bc444a26af47e/751x532cq70/tandoori-chicken-biryani-recipe-main-photo.jpg '),
    new Recipe('Ice-Cream', ' i love ice-cream', 'https://images.herzindagi.info/image/2020/Jun/chocolate-parle-g-ice-cream.jpg ')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
