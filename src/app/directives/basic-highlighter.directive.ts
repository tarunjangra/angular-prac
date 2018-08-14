import { 
    Directive, 
    OnInit, 
    ElementRef, 
    Renderer2, 
    HostListener, 
    HostBinding,
    Input
} from "../../../node_modules/@angular/core";

@Directive(
    {
        selector: '[appBasicHighlighter]'
    }
)

export class BasicHighlighterDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'green';
    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
    constructor(
        private eleRef: ElementRef,
        private renderer: Renderer2
    ){}
    ngOnInit(){
       this.backgroundColor = this.defaultColor; 
    }

    @HostListener('mouseenter') mouseover(){
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','green');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeave(){
        // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','grey');
        this.backgroundColor = this.defaultColor;
    }
}