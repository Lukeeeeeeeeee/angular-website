import { HeroesService } from './../hero-tax-return/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero, HeroTaxReturn } from '../hero-tax-return/hero';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
    heroes: Observable<Hero[]>;
    selectedTaxReturns: HeroTaxReturn[] = [];

    constructor(private heroesService: HeroesService) {
        this.heroes = heroesService.getHeroes();
    }

    ngOnInit() {}

    showTaxReturn(hero: Hero) {
        this.heroesService.getTaxReturn(hero).subscribe(htr => {
            if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
                this.selectedTaxReturns.push(htr);
            }
        });
    }

    closeTaxReturn(ix: number) {
        this.selectedTaxReturns.splice(ix, 1);
    }
}
