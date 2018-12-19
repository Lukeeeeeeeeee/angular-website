import { TiresService } from './tires.service';
import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';
import { Car } from '../model/car';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    id = 'CarService1';

    constructor(
        protected engineService: EngineService,
        protected tiresService: TiresService
    ) {}

    getCar() {
        return new Car(
            this.engineService.getEngine(),
            this.tiresService.getTires()
        );
    }

    get name() {
        return `${this.id}-${this.engineService.id}-${this.tiresService.id}`;
    }
}

@Injectable({
    providedIn: 'root'
})
export class CarService2 extends CarService {
    id = 'CarService2';
    constructor(
        protected engineService: EngineService,
        protected tiresService: TiresService
    ) {
        super(engineService, tiresService);
    }

    getCar() {
        const car = super.getCar();
        car.name = 'BamBam Motors, BroVan 2000';
        return car;
    }
}

@Injectable({
    providedIn: 'root'
})
export class CarService3 extends CarService2 {
    id = 'CarService3';
    constructor(
        protected engineService: EngineService,
        protected tiresService: TiresService
    ) {
        super(engineService, tiresService);
    }

    getCar() {
        const car = super.getCar();
        car.name = 'Chizzamm Motors, Calico UltraMax Supreme';
        return car;
    }
}
