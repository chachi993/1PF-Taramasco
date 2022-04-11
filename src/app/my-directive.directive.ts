import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elemento: ElementRef) {
  elemento.nativeElement.style.fontSize = '20px';
}
}
