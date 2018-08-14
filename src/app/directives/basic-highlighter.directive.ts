import { Directive, OnInit, ElementRef, Renderer2 } from "../../../node_modules/@angular/core";

@Directive(
    {
        selector: '[appBasicHighlighter]'
    }
)

export class BasicHighlighterDirective implements OnInit {
    constructor(
        private eleRef: ElementRef,
        private renderer: Renderer2
    ){}
    ngOnInit(){
        console.log('directive: '+ this.eleRef);
        this.renderer.setStyle(this.eleRef.nativeElement,'background-color','red');
    }
}