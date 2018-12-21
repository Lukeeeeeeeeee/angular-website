import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'app-hero-bios-and-contacts',
    templateUrl: './hero-bios-and-contacts.component.html',
    styleUrls: ['./hero-bios-and-contacts.component.css']
})
export class HeroBiosAndContactsComponent implements OnInit {
    constructor(logger: LoggerService) {
        logger.logInfo('Creating HeroBiosAndContactComponent');
    }

    ngOnInit() {}
}
