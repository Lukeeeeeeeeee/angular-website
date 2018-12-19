import { Engine } from './../model/engine';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EngineService {
    id = 'Engine1';

    constructor() {}

    getEngine() {
        return new Engine();
    }
}

@Injectable({
    providedIn: 'root'
})
export class EngineService2 {
    id = 'Engine2';

    constructor() {}

    getEngine() {
        const eng = new Engine();
        eng.cylinders = 8;
        return eng;
    }
}
