import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  textDeco(action:string){
    this.el.nativeElement.style.backgroundColor = action;
  }
  @HostListener ('click') onClicks(){
    this.textDeco("rgba(0, 0, 255,0.47)");
  }
    

  constructor(private el:ElementRef) { }

}
