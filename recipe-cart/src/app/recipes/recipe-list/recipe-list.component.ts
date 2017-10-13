import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is Recipe 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Recipe 2', 'This is Recipe 2', 'http://media2.sailusfood.com/wp-content/uploads/2016/02/cheese-corn-balls-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeItemWasSelected(recipeData) {
    this.recipeItemWasSelected.emit(recipeData);
  }

}
