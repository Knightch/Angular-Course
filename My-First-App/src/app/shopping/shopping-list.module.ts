import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingComponent } from "./shopping.component";

@NgModule({
    declarations: [
        ShoppingComponent,
        ShoppingEditComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingComponent },
        ]), CommonModule, FormsModule
    ]
})
export class ShoppingListModule {

}