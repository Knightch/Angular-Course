import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { ShoppingService } from './shopping/shopping.service';
import { DropDownDirective } from './Ingredient/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './Auth/auth.component';
import { LoadingSpinnerComponent } from './Ingredient/loading-spinner/loading-spinner.component';
import { AuthInterceptorsService } from './Auth/auth-interceptor.service';
import { AlertComponent } from './Ingredient/alert/alert.component';
import { PlaceholderDirective } from './Ingredient/placeholder/placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingEditComponent,
    DropDownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule
  ],
  providers: [ShoppingService, RecipeService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorsService, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent

  ]
})
export class AppModule { }
