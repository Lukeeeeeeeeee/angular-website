import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroFormTemplateComponent } from './template/hero-form-template/hero-form-template.component';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './directives/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './directives/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './directives/alter-ego.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
