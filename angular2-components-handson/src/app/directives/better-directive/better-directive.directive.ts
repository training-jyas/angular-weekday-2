import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective {
  @HostBinding('style.fontWeight') fontWeight: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
    this.fontWeight = 'bold';
  };

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'orange');
    this.fontWeight = 'normal';
  };

}
