import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  maxNumber: number;
  numbers: Array<number>;
  isOdd: boolean;

  constructor() {
    this.numbers = [];
  }

  ngOnInit() {
  }

  generate() {
    this.numbers = [];
    for (let i = 0; i < this.maxNumber; i++) {
      this.numbers.push(i + 1);
    }
  }

}
