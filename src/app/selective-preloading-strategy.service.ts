import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Route, PreloadingStrategy } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
    preloadedModules: string[] = [];

    constructor() {}

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);

            console.log('Preloaded: ' + route.path);

            return load();
        } else {
            return of(null);
        }
    }
}
