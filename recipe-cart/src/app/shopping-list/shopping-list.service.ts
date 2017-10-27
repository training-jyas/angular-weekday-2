import {
  EventEmitter
} from '@angular/core';
import {
  Ingredient
} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientAdded = new EventEmitter < Ingredient[] > ();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    // ingredients.forEach(each => {
    //   this.ingredients.push(each);
    // });
    this.ingredients.push(...ingredients); // we are using the spread operator to push array into a array
    this.ingredientAdded.emit(this.ingredients);
  }
}
