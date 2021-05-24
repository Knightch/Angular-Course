import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[basicHighlight]'
})
export class bassicHighLight implements OnInit{
constructor(private elRef: ElementRef){}
    
    ngOnInit() {
        this.elRef.nativeElement.style.backgroundColor = '#5789D8';
        this.elRef.nativeElement.style.color = '#FFFFFF';
    }
}