import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    ngOnInit() {}

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggerIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';

        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggerIn) {
                const redirect = this.authService.redirectUrl
                    ? this.authService.redirectUrl
                    : '/admin';

                const navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };
                this.router.navigate([redirect], navigationExtras);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}
