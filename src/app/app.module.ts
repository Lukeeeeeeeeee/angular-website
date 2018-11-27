import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroBirthday1Component } from './hero-birthday1/hero-birthday1.component';
import { HeroBirthday2Component } from './hero-birthday2/hero-birthday2.component';
import { PowerBooterComponent } from './power-booter/power-booter.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { PowerBoostCalculatorComponent } from './power-boost-calculator/power-boost-calculator.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { FlyingHeroesImpureComponent } from './flying-heroes-impure/flying-heroes-impure.component';
import { FlyingHeroesImpurePipe } from './pipes/flying-heroes-impure.pipe';
import { HeroAsyncMessageComponent } from './hero-async-message/hero-async-message.component';
import { FetchJsonPipe } from './pipes/fetch-json.pipe';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthday1Component,
    HeroBirthday2Component,
    PowerBooterComponent,
    ExponentialStrengthPipe,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpureComponent,
    FlyingHeroesImpurePipe,
    HeroAsyncMessageComponent,
    FetchJsonPipe,
    HeroListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
