import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
    { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
        data: { preload: true }
    },
    // { path: 'crisis-center', component: CrisisListComponent },
    // { path: 'heroes', component: HeroListComponent },
    { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, {
            enableTracing: true,
            // preloadingStrategy: PreloadAllModules // PreloadAllModules 策略不会加载被 CanLoad 守卫保护的特性区
            preloadingStrategy: SelectivePreloadingStrategyService // 自定义预加载策略
        })
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
