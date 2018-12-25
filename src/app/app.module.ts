import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroBaseComponent } from './hero-base/hero-base.component';
import { HeroBiosComponent } from './hero-bios/hero-bios.component';
import { HeroBioComponent } from './hero-bios/hero-bio/hero-bio.component';
import { HeroBiosAndContactsComponent } from './hero-bios-and-contacts/hero-bios-and-contacts.component';
import { HeroContactComponent } from './hero-bios-and-contacts/hero-contact/hero-contact.component';
import { StorageComponent } from './storage/storage.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ParentFinderComponent } from './parent-finder/parent-finder.component';
import { CarolComponent } from './parent-finder/c-child/carol/carol.component';
import { ChrisComponent } from './parent-finder/c-child/chris/chris.component';
import { CraigComponent } from './parent-finder/c-child/craig/craig.component';
import { BarryComponent } from './parent-finder/b-parent/barry/barry.component';
import { AlexComponent } from './parent-finder/a-grandparent/alex/alex.component';
import { AliceComponent } from './parent-finder/a-grandparent/alice/alice.component';
import { CathyComponent } from './parent-finder/c-child/cathy/cathy.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroBaseComponent,
        HeroBiosComponent,
        HeroBioComponent,
        HeroBiosAndContactsComponent,
        HeroContactComponent,
        StorageComponent,
        HighlightDirective,
        ParentFinderComponent,
        CarolComponent,
        ChrisComponent,
        CraigComponent,
        BarryComponent,
        AlexComponent,
        AliceComponent,
        CathyComponent
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
