import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-list-enter-leave',
    templateUrl: './hero-list-enter-leave.component.html',
    styleUrls: ['./hero-list-enter-leave.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class HeroListEnterLeaveComponent implements OnInit {
    @Input() heroes: Hero[];
    @Output() remove = new EventEmitter<number>();

    constructor() {}

    ngOnInit() {}

    removeHero(id: number) {
        this.remove.emit(id);
    }
}
