import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Subject
} from 'rxjs/Subject';
import 'rxjs/Rx';

import {
  Recipe
} from './recipe.model';
import {
  Ingredient
} from '../shared/ingredient.model';
import {
  ShoppingListService
} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject < Recipe[] > ();

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
    this.saveRecipeInDb(recipe);
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

  getRecipesFromDb() {
    this.http.get('http://localhost:3000/recipes')
      .map(
        (response: Response) => {
          console.log('get recipes', response.json());
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.setRecipes(recipes);
        }
      );
  }

  saveRecipeInDb(recipe: Recipe) {
    this.http.post('http://localhost:3000/recipe', recipe)
      .subscribe(response => {
        console.log('post response', response.json());
        this.recipes.push(recipe);
        this.recipesChanged.next(this.getRecipes());
      });
  }

  updateRecipeInDb(recipe: Recipe) {
    this.http.put('http://localhost:3000/recipe', recipe)
      .subscribe(response => {
        console.log('put response', response.json());
      });
  }

  deleteRecipe(id: string) {
    console.log('recipe id to delete', id);
    this.http.delete('http://localhost:3000/recipe/' + id)
      .subscribe(response => {
        console.log('delete response', response.json());
      });
  }
}
