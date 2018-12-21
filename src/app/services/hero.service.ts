import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    private heroes: Array<Hero> = [
        new Hero(1, 'Bob', 'hahahah', '123-456-7899'),
        new Hero(2, 'Tom', 'tomtomtom', '555-555-5555'),
        new Hero(3, 'Jerry', 'jerjejrjje', '111-222-3333'),
    ];

    constructor() {}

    getAllHeroes(): Array<Hero> {
        return this.heroes;
    }

    getHeroById(id: number): Hero {
        return this.heroes.find(hero => hero.id === id);
    }
}
