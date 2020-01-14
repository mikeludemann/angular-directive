import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[sizeType]'
})
export class SizeTypeDirective {

  constructor(private el: ElementRef) { }

  @Input('sizeType') size: string;

  @HostListener('mouseenter') onMouseOver(){
    this.setSize(this.size);
  }

  @HostListener('mouseleave') onMouseOut(){
    this.setSize(null);
  }

  private setSize(size: string){
    this.el.nativeElement.style.fontSize = size;
    this.el.nativeElement.style.transition = "all 1s ease-in-out";
  }

}
