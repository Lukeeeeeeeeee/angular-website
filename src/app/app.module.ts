import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VillainsComponent } from './villains/villains.component';
import { HeroTaxReturnComponent } from './hero-tax-return/hero-tax-return.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
    declarations: [
        AppComponent,
        VillainsComponent,
        HeroTaxReturnComponent,
        HeroesListComponent
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
