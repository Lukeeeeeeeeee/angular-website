import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) {}

    // tslint:disable-next-line:no-input-rename
    @Input('appHighlight') highlightColor: string;
    @Input() defaultColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor|| this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
