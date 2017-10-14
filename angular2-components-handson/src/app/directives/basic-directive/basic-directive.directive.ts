import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirectiveDirective {

  constructor(private elemRef: ElementRef) { 
    this.elemRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
