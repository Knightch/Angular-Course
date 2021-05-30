import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../Ingredient/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingrediant: Ingrediant[];
  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.ingrediant = this.slService.getIngrediant();
    this.slService.ingrediantChanged.subscribe(
      (ingrediant: Ingrediant[]) => {
        this.ingrediant = ingrediant;
      }
    )
  }



}
