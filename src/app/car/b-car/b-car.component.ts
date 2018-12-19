import { CarService, CarService2 } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { EngineService, EngineService2 } from '../engine.service';

@Component({
    selector: 'app-b-car',
    templateUrl: './b-car.component.html',
    styleUrls: ['./b-car.component.css'],
    providers: [
        { provide: CarService, useClass: CarService2 },
        { provide: EngineService, useClass: EngineService2 },
    ]
})
export class BCarComponent implements OnInit {
    description: string;

    constructor(carService: CarService) {
        this.description = `${carService.getCar().description} (${carService.name})`;
    }

    ngOnInit() {}
}
