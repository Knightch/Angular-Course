import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]'
})
export class BetterHighLightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#FFFFFF');
  }

}
