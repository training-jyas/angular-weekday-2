import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private recipeService: RecipeService,
                private http: Http) {
    }

    saveRecipes() {
        console.log('save recipes', this.recipeService.getRecipes());
        // this.http.put('https://ng-recipe-cart.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        // this.http.get('https://ng-recipe-cart.firebaseio.com/recipes.json')
        //   .map(
        //     (response: Response) => {
        //       console.log('get recipes', response);
        //       const recipes: Recipe[] = response.json();
        //       for (const recipe of recipes) {
        //         if (!recipe['ingredients']) {
        //           recipe['ingredients'] = [];
        //         }
        //       }
        //       return recipes;
        //     }
        //   )
        //   .subscribe(
        //     (recipes: Recipe[]) => {
        //       this.recipeService.setRecipes(recipes);
        //     }
        //   );
      }
}
