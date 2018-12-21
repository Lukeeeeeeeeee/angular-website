import { LoggerService } from './../services/logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero-bios',
    templateUrl: './hero-bios.component.html',
    styleUrls: ['./hero-bios.component.css']
})
export class HeroBiosComponent implements OnInit {
    constructor(logger: LoggerService) {
        logger.logInfo('Creating HeroBiosComponent');
    }

    ngOnInit() {}
}
