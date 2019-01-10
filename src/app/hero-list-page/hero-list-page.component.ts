import { Component, OnInit } from '@angular/core';
import {
    trigger,
    transition,
    query,
    style,
    stagger,
    animate
} from '@angular/animations';

@Component({
    selector: 'app-hero-list-page',
    templateUrl: './hero-list-page.component.html',
    styleUrls: ['./hero-list-page.component.css'],
    animations: [
        trigger('filterAnimation', [
            transition(':enter, * => 0, * => -1', []),
            transition(':increment', [
                query(':enter', [
                    style({ opacity: 0, width: '0px' }),
                    stagger(50, [
                        animate(
                            '300ms ease-out',
                            style({ opacity: 1, width: '*' })
                        )
                    ])
                ], {optional: true})
            ])
        ])
    ]
})
export class HeroListPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
