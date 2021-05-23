import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/Ingredient/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInut') nameInputRef: ElementRef;
  @ViewChild('amountInut') amountInputRef: ElementRef;
  @Output() ingrediantAdded=new EventEmitter<Ingrediant>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingrediant(ingName, ingAmount);
    this.ingrediantAdded.emit(newIngredient);

  }
}
