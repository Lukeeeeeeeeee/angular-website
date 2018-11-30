import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-form-template',
    templateUrl: './hero-form-template.component.html',
    styleUrls: ['./hero-form-template.component.css']
})
export class HeroFormTemplateComponent implements OnInit {
    powers = [
        '很聪明',
        '非常性感',
        '天气变化'
    ];
    hero = {
        name: 'Dr.',
        alterEgo: 'Dr.What',
        power: this.powers[0]
    };
    constructor() {}

    ngOnInit() {}
}
