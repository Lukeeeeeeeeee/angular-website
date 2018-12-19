import { CarService, CarService3 } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-car',
    templateUrl: './c-car.component.html',
    styleUrls: ['./c-car.component.css'],
    providers: [{ provide: CarService, useClass: CarService3 }]
})
export class CCarComponent implements OnInit {
    description: string;

    constructor(carService: CarService) {
        this.description = `${carService.getCar().description} (${
            carService.name
        })`;
    }

    ngOnInit() {}
}
