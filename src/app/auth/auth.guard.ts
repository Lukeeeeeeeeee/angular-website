import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild,
    NavigationExtras,
    CanLoad,
    Route
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const url: string = state.url;

        console.log('AuthGuard#canActivate called');
        return this.checkLogin(url);
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this.canActivate(route, state);
    }

    canLoad(route: Route) {
        const url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggerIn) {
            return true;
        }

        this.authService.redirectUrl = url;

        const sessionId = 123456789;

        const navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };

        this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}
