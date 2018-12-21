import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-hero-base',
    templateUrl: './hero-base.component.html',
    styleUrls: ['./hero-base.component.css'],
    providers: [HeroService]
})
export class HeroBaseComponent implements OnInit {
    heroes: Array<Hero>;

    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.heroes = this.heroService.getAllHeroes();
    }
}
