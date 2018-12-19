import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VillainsComponent } from './villains/villains.component';
import { HeroTaxReturnComponent } from './hero-tax-return/hero-tax-return.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CarComponent } from './car/car.component';
import { ACarComponent } from './car/a-car/a-car.component';
import { BCarComponent } from './car/b-car/b-car.component';
import { CCarComponent } from './car/c-car/c-car.component';

@NgModule({
    declarations: [
        AppComponent,
        VillainsComponent,
        HeroTaxReturnComponent,
        HeroesListComponent,
        CarComponent,
        ACarComponent,
        BCarComponent,
        CCarComponent
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
