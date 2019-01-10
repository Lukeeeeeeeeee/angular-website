import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave/hero-list-enter-leave-page.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        OpenCloseComponent,
        InsertRemoveComponent,
        HeroListEnterLeaveComponent,
        HeroListEnterLeavePageComponent,
        HeroListPageComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: '/home' },
            {
                path: 'home',
                component: HomeComponent,
                data: { animation: 'HomePage' }
            },
            {
                path: 'about',
                component: AboutComponent,
                data: { animation: 'AboutPage' }
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
