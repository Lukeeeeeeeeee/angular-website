import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-insert-remove',
    templateUrl: './insert-remove.component.html',
    styleUrls: ['./insert-remove.component.css'],
    animations: [
        trigger('myInsertRemoveTrigger', [
            // 进入
            transition(':enter', [
                style({opacity: 0}),
                animate('5s', style({opacity: 1})),
            ]),
            // 离开
            transition(':leave', [
                animate('5s', style({opacity: 0})),
            ])
        ])
    ]
})
export class InsertRemoveComponent implements OnInit {
    isShown = false;

    constructor() {}

    ngOnInit() {}

    toggle() {
        this.isShown = !this.isShown;
    }
}
