import { UserContextService } from './services/user-context.service';
import { LoggerService } from './services/logger.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private userId = 1;

    constructor(
        logger: LoggerService,
        public userContext: UserContextService
    ) {
        userContext.loadUser(this.userId);
        logger.logInfo('AppComponent initialized');
    }
}
