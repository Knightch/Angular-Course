import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthInterceptorsService } from "./Auth/auth-interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingService } from "./shopping/shopping.service";

@NgModule({
    providers: [
        ShoppingService,
        RecipeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorsService,
            multi: true
        }
    ]
})
export class CoreModule { }