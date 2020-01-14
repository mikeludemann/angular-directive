import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[positionText]'
})
export class PositionTextDirective {

  constructor(private el: ElementRef) { }

  @Input('positionText') position: string;

  @HostListener('mouseenter') onMouseOver(){
    this.setPosition(this.position);
  }

  @HostListener('mouseleave') onMouseOut(){
    this.setPosition(null);
  }

  private setPosition(position: string){
    this.el.nativeElement.style.textAlign = position;
    this.el.nativeElement.style.transition = "all 1s ease-in-out";
  }

}
