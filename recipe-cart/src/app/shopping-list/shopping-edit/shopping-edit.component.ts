import { Ingredient } from '../../shared/ingredient.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  name: string;
  amount: number;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredient = new Ingredient(this.name, this.amount);
    this.ingredientAdded.emit(ingredient);
  }

}
