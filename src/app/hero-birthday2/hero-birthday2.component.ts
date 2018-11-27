import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-birthday2',
    templateUrl: './hero-birthday2.component.html',
    styleUrls: ['./hero-birthday2.component.css']
})
export class HeroBirthday2Component implements OnInit {
    birthday = new Date(1988, 3, 15);
    toggle = true;

    constructor() {}

    ngOnInit() {}

    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }
    toggleFormat() {
        this.toggle = !this.toggle;
    }
}
