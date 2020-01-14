import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[colorType]'
})
export class ColorTypeDirective {

  constructor(private el: ElementRef) { }

  @Input('colorType') hoverColor: string;

  @HostListener('mouseenter') onMouseOver(){
    this.highlightColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseOut(){
    this.highlightColor(null);
  }

  private highlightColor(color: string){
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.transition = "all 1s ease-in-out";
  }

}
