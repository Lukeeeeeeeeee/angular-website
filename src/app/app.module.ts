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

@NgModule({
    declarations: [
        AppComponent,
        HeroBaseComponent,
        HeroBiosComponent,
        HeroBioComponent,
        HeroBiosAndContactsComponent,
        HeroContactComponent,
        StorageComponent,
        HighlightDirective
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
