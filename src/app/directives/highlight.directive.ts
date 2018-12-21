import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('appHighlight') highlightColor: string;
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || 'cyan');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}
