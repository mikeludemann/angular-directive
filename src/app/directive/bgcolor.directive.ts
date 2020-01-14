import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[bgcolor]'
})
export class BgcolorDirective {

  constructor(private el: ElementRef) { }

  @Input('bgcolor') hoverColor: string;

  @HostListener('mouseenter') onMouseOver(){
    this.highlightBackgroundColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseOut(){
    this.highlightBackgroundColor(null);
  }

  private highlightBackgroundColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transition = "all 1s ease-in-out";
  }

}
