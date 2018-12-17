import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { of, Observable } from 'rxjs';
import { HEROES } from './mock-heroes';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor(private messageService: MessageService) {}

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }

    getHero(id: number | string) {
        return this.getHeroes().pipe(
            map((heroes: Hero[]) => {
                return heroes.find(hero => hero.id === +id);
            })
        );
    }
}
