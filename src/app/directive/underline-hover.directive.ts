import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[underlineHover]'
})
export class UnderlineHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseOver(){
    this.highlightUnderline();
  }

  @HostListener('mouseleave') onMouseOut(){
    this.highlightUnderlineRemove();
  }

  private highlightUnderline(){
    this.el.nativeElement.style.textDecoration = "underline";
    this.el.nativeElement.style.transition = "all 1s ease-in-out";
  }

  private highlightUnderlineRemove(){
    this.el.nativeElement.style.textDecoration = "none";
    this.el.nativeElement.style.transition = "all 1s ease-in-out";
  }

}
