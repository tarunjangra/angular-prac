import { Directive, OnInit, ElementRef, Renderer2, HostListener } from "../../../node_modules/@angular/core";

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
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.eleRef.nativeElement,'background-color','green');
        this.renderer.setStyle(this.eleRef.nativeElement,'color','white');
        this.renderer.setStyle(this.eleRef.nativeElement,'font-style','bold');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event){
        this.renderer.setStyle(this.eleRef.nativeElement,'background-color','grey');
        this.renderer.setStyle(this.eleRef.nativeElement,'color','black');
        this.renderer.setStyle(this.eleRef.nativeElement,'font-style','normal');
    }
}