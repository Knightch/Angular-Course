import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingrediant } from '../Ingredient/ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit,OnDestroy {
  ingrediant: Ingrediant[];
  private idSubscribe: Subscription;
  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.ingrediant = this.slService.getIngrediant();
    this.idSubscribe = this.slService.ingrediantChanged.subscribe(
      (ingrediant: Ingrediant[]) => {
        this.ingrediant = ingrediant;
      }
    )
  }
  onEditItem(index:number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.idSubscribe.unsubscribe();
  }



}
