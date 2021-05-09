import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../Ingredient/ingredients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingrediant: Ingrediant[] =[
    new Ingrediant('Apple',5),
    new Ingrediant('Orange',10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
