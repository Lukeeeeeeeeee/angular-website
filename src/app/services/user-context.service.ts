import { LoggerService } from './logger.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserContextService {
    name: string;
    role: string;
    loggedInsince: Date;

    constructor(
        private userService: UserService,
        private loggerService: LoggerService
    ) {
        this.loggedInsince = new Date();
    }

    loadUser(userId: number) {
        const user = this.userService.getUserById(userId);
        this.name = user.name;
        this.role = user.role;

        this.loggerService.logDebug('loaded User');
    }
}
