import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
    powers = ['很聪明', '非常灵活', '炙热', '影响天气'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck OverStreet');

    submitted = false;

    constructor() {}

    ngOnInit() {}

    onSubmit() {
        this.submitted = true;
    }

    newHero() {
        this.model = new Hero(42, '', '');
    }


}
