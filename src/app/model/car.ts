import { Tires } from './tires';
import { Engine } from './engine';

export class Car {
    name = '发动机';
    constructor(public engine: Engine, public tires: Tires) {}

    get description() {
        return `${this.name} car with ${this.engine.cylinders} cylinders and ${
            this.tires.make
        } tires`;
    }
}
