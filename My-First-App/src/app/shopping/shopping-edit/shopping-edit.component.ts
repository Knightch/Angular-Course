import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingrediant } from 'src/app/Ingredient/ingredients.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slService: ShoppingService) { }

  ngOnInit(): void {
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingrediant(value.name, value.amount);
    this.slService.addIngrediant(newIngredient);

  }
}
