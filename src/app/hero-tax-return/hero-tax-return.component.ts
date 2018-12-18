import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeroTaxReturnService } from './hero-tax-return.service';
import { HeroTaxReturn } from './hero';

@Component({
    selector: 'app-hero-tax-return',
    templateUrl: './hero-tax-return.component.html',
    styleUrls: ['./hero-tax-return.component.css'],
    providers: [HeroTaxReturnService]
})
export class HeroTaxReturnComponent implements OnInit {
    message = '';

    @Output() close = new EventEmitter<void>();

    get taxReturn(): HeroTaxReturn {
        return this.heroTaxReturnService.taxReturn;
    }

    @Input()
    set taxReturn(htr: HeroTaxReturn) {
        this.heroTaxReturnService.taxReturn = htr;
    }

    constructor(private heroTaxReturnService: HeroTaxReturnService) {}

    ngOnInit() {}

    onCanceled() {
        this.flashMessage('Canceled');
        this.heroTaxReturnService.restoreTaxReturn();
    }

    onClose() {
        this.close.emit();
    }

    onSaved() {
        this.flashMessage('Saved');
        this.heroTaxReturnService.saveTaxReturn();
    }

    flashMessage(msg: string) {
        this.message = msg;
        setTimeout(() => {
            this.message = '';
        }, 500);
    }
}
