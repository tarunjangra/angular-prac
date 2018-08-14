import { 
    Directive, 
    OnInit, 
    ElementRef, 
    Renderer2, 
    HostListener, 
    HostBinding
} from "../../../node_modules/@angular/core";

@Directive(
    {
        selector: '[appBasicHighlighter]'
    }
)

export class BasicHighlighterDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
    constructor(
        private eleRef: ElementRef,
        private renderer: Renderer2
    ){}
    ngOnInit(){
    }

    @HostListener('mouseenter') mouseover(){
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','green');
        this.backgroundColor = 'green'
    }

    @HostListener('mouseleave') mouseLeave(){
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','grey');
        this.backgroundColor = 'transparent'
    }
}