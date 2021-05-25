import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]'
})
export class BetterHighLightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;
  @HostBinding('style.color') textColor: string = this.highlightColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', '#FFFFFF');
  }
  @HostListener('mouseenter') mouseOver(EventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#FFFFFF');
    this.backgroundColor = this.highlightColor;
    this.textColor = this.defaultColor;
  }
  @HostListener('mouseleave') mouseLeave(EventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#FFFFFF');
    this.backgroundColor = this.highlightColor;
    this.textColor = this.defaultColor;
  }
}
