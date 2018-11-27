import { Component, OnInit } from '@angular/core';
import { HEROES } from '../heroes';

@Component({
    selector: 'app-flying-heroes',
    templateUrl: './flying-heroes.component.html',
    styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
    heroes: any[] = [];
    canFly = true;
    mutate = true;

    constructor() {
        this.reset();
    }

    ngOnInit() {}

    addHero(name: string) {
        name = name.trim();
        if (!name) { return; }
        const hero = {name, canFly: this.canFly};
        if (this.mutate) {
            // 纯管道不会更新(会飞的英雄)，因为 heroes 数组引用没有发生变化
            // 非纯管道会更新
            this.heroes.push(hero);
        } else {
            // 管道更新(会飞的英雄)，是因为通过 concat， heroes 数组是一个新的对象
            this.heroes = this.heroes.concat(hero);
        }
    }

    reset() {
        this.heroes = HEROES.slice();
    }
}
