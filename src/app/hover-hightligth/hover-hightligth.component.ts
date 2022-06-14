import { Directive,ElementRef,Renderer2,OnInit } from '@angular/core';

@Directive({
  selector: 'app-hover-hightligth',
})
export class HoverHighlightDirective {
  constructor(
    private elRef : ElementRef,
    private renderer : Renderer2
  ) {}

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', "yellow");
  } 
    
}
