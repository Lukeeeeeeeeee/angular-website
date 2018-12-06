import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * path 不能以斜线(/)开头
 * 第二个路由 :id 是一个路由参数的令牌(Token).
 * 第三个路由 data 属性用来存放每个具体路由有关的任意信息
 * 第四个路由空路径('')表示应用的默认路径，当 URL 为空时就会触发，通常作为起点
 * 最后一个路由 ** 路径是一个通配符.
 */

const appRoutes: Routes = [
    { path: 'cirsis-center', component: CrisisListComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    {
        path: 'heroes',
        component: HeroListComponent,
        data: { title: 'Heroes List' }
    },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        CrisisListComponent,
        HeroDetailComponent,
        HeroListComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
