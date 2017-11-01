import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log('params', params);
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeByIndex(this.id);
      }
    );
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
