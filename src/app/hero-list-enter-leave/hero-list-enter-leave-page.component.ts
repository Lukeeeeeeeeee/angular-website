import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
@Component({
    selector: 'app-hero-list-enter-leave-page',
    template: `
    <section>
      <h2>Automatic Calculation(自动计算)</h2>
        <app-hero-list-enter-leave
            [heroes]="heroes"
            (remove)="onRemove($event)"
        ></app-hero-list-enter-leave>
    </section>
    `
})
export class HeroListEnterLeavePageComponent implements OnInit {
    heroes = HEROES.slice();

    constructor() {}

    ngOnInit() {}

    onRemove(id: number) {
        this.heroes = this.heroes.filter(hero => hero.id !== id);
    }
}
