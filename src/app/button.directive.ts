import { Directive,ElementRef,HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  @Input() buttonColor:string;

  constructor(private elementRef: ElementRef) {
  	    this.elementRef.nativeElement.style.backgroundColor = 'black';
    	    this.elementRef.nativeElement.style.color = 'white';
    	    this.elementRef.nativeElement.style.fontFamily = 'cursive';
    	    this.elementRef.nativeElement.style.width = '100px';
    	    this.elementRef.nativeElement.style.height = '30px';
    	  }

      @HostListener('mouseenter') onMouseEnter(){
        this.elementRef.nativeElement.style.backgroundColor=this.buttonColor;
      }
    @HostListener('mouseleave') onMouseLeave(){
      this.elementRef.nativeElement.style.backgroundColor="black";
    }

}
