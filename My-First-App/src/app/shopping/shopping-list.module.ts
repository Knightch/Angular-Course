import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../Ingredient/shared.module";

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
        ]),
        SharedModule,
        FormsModule
    ]
})
export class ShoppingListModule {

}