import { HeroService } from './hero.service';
import { Hero } from './../model/hero';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroCacheService {
    hero: Hero;

    constructor(private heroService: HeroService) {}

    fetchCachedHero(id: number) {
        if (!this.hero) {
            this.hero = this.heroService.getHeroById(id);
        }
        return this.hero;
    }
}
