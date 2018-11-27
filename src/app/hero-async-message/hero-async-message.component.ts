import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
    selector: 'app-hero-async-message',
    templateUrl: './hero-async-message.component.html',
    styleUrls: ['./hero-async-message.component.css']
})
export class HeroAsyncMessageComponent implements OnInit {
    message$: Observable<string>;

    private messages = [
        '你是我的英雄!',
        '你是最棒的!',
        '你将是我的英雄?'
    ];

    constructor() {
        this.resend();
    }

    ngOnInit() {}

    resend() {
        this.message$ = interval(500).pipe(
            map(i => this.messages[i]),
            take(this.messages.length)
        );
    }
}
