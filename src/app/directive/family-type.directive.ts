import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[familyType]'
})
export class FamilyTypeDirective {

  constructor(private el: ElementRef) { }

  @Input('familyType') family: string;

  @HostListener('mouseenter') onMouseOver(){
    this.setFamily(this.family);
  }

  @HostListener('mouseleave') onMouseOut(){
    this.setFamily(null);
  }

  private setFamily(family: string){
    this.el.nativeElement.style.fontFamily = family;
    this.el.nativeElement.style.transition = "all 1s ease-in-out";
  }

}
