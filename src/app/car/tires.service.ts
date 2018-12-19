import { Injectable } from '@angular/core';
import { Tires } from '../model/tires';

@Injectable({
    providedIn: 'root'
})
export class TiresService {
    id = 'Tires1';

    constructor() {}

    getTires() {
        return new Tires();
    }
}
