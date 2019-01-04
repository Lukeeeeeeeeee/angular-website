import { HeroesService } from './heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [HeroesService]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    editHero: Hero;
    constructor(private heroesService: HeroesService) {}

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroesService
            .getHeroes()
            .subscribe(heroes => (this.heroes = heroes));
    }

    add(name: string): void {
        this.editHero = undefined;
        name = name.trim();
        if (!name) {
            return;
        }

        const newHero: Hero = { name } as Hero;
        this.heroesService
            .addHero(newHero)
            .subscribe(hero => this.heroes.push(hero));
    }

    edit(hero) {
        this.editHero = hero;
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroesService.deleteHero(hero.id).subscribe();
    }

    update() {
        if (this.editHero) {
            this.heroesService.updateHero(this.editHero).subscribe(hero => {
                const ix = hero
                    ? this.heroes.findIndex(h => h.id === hero.id)
                    : -1;
                if (ix > -1) {
                    this.heroes[ix] = hero;
                }
            });
        }
    }
}
