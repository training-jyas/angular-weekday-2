import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService,
              private http: Http) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: string) {
    let matchingRecipe = new Recipe('', '', '', []);
    this.recipes.forEach(recipe => {
      console.log(recipe['_id'], id);
      if (recipe['_id'] === id) {
        matchingRecipe = recipe;
      }
    });
    return matchingRecipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: string, newRecipe: Recipe) {
    newRecipe._id = id;
    this.recipes.forEach((recipe: Recipe) => {
      if (recipe['_id'] === id) {
        recipe.name = newRecipe.name;
        recipe.description = newRecipe.description;
        recipe.imagePath = newRecipe.imagePath;
        recipe.ingredients = newRecipe.ingredients;
      }
    });
    this.recipesChanged.next(this.recipes.slice());
    this.updateRecipeInDb(newRecipe);
  }

  deleteRecipe(id: string) {
    // this.recipes.splice(id, 1);
    // this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipeInDb(recipe) {
    this.http.put('http://localhost:3000/recipe', recipe)
      .subscribe(response => {
        console.log('put response', response.json());
      });
  }
}
