import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-a-car',
    templateUrl: './a-car.component.html',
    styleUrls: ['./a-car.component.css']
})
export class ACarComponent implements OnInit {
    description: string;

    constructor(carService: CarService) {
        this.description = `${carService.getCar().description} (${carService.name})`;
    }

    ngOnInit() {}
}
