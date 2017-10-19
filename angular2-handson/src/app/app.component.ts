import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  moduleSelected: string;

  constructor() {
    this.moduleSelected = 'services';
  }

  onHeaderItemWasSelected(module) {
    this.moduleSelected = module;
  }
}
