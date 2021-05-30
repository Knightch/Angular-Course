import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/Ingredient/ingredients.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  constructor(private slService: ShoppingService) { }

  ngOnInit(): void {
  }
  onAddItem() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingrediant(ingName, ingAmount);
    this.slService.addIngrediant(newIngredient);

  }
}
