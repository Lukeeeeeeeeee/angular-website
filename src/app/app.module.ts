// import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
// import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';

/**
 * 创建 appRouting module 并将下面的复制过去
 */
/*const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'heroes', component: HeroListComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];*/

@NgModule({
    declarations: [
        AppComponent,
        // CrisisListComponent,
        // HeroListComponent,
        ComposeMessageComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        // 复制到 appRouting module中
        // RouterModule.forRoot(appRoutes, { enableTracing: true }),

        // 通配符匹配不到，返回404
        // AppRoutingModule,
        HeroesModule,
        // AdminModule,
        // CrisisCenterModule,
        AuthModule,
        // AppRoutingModule,在 HeroesModule 之后
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

        console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}
