import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() headerItemSelected = new EventEmitter<string>();

  onHeaderMenuItemSelected(feature) {
    this.headerItemSelected.emit(feature);
  }

}
