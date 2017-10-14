import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {
  @HostBinding('class.open') toggle: boolean;

  constructor() { 
    this.toggle = false;
  }

  @HostListener('click') toggleDropdown(eventData: Event) {
    this.toggle = !this.toggle;
  }

}
