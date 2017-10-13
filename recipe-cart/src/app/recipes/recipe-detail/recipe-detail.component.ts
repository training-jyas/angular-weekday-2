import { Recipe } from '../recipe.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }

  ngOnInit() {
  }

}
