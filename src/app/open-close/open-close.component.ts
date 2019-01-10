import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-open-close',
    templateUrl: './open-close.component.html',
    styleUrls: ['./open-close.component.css'],
    animations: [
        trigger('openClose', [
            // state 状态
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                height: '100px',
                opacity: 0.3,
                backgroundColor: 'green'
            })),
            // 下面写法和上面效果一样
            /*
            state('true', style({height: '*'})),
            state('false', style({height: '0px'})),
            */
            transition('open => closed', [
                animate('1s')
            ]),
            transition('closed => open', [
                animate('0.8s')
            ]),
            // 下面的写法和上面效果一样
            // transition('true <=> false', animate(500)),
            /*
            transition('* => open', [
                animate('1s')
            ]),
            transition('* => closed', [
                animate('0.5s')
            ]),
            */
           /*
            transition('open <=> closed', [
                animate('0.3s')
            ]),
            */
           /*
            transition('* => open', [
                animate('1s',
                    style({opacity: '*'})
                )
            ]),
            */
           /*
            transition('* => *', [
                animate('1s')
            ])
            */
        ])
    ]
})
export class OpenCloseComponent implements OnInit {
    isOpen = true;

    constructor() {}

    ngOnInit() {}

    toggle() {
        this.isOpen = !this.isOpen;
    }
}
