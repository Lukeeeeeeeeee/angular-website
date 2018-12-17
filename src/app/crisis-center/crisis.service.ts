import { CRISES } from './mock-crises';
import { Crisis } from './crisis';
import { Injectable } from '@angular/core';
import { MessageService } from '../heroes/message.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CrisisService {
    private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

    constructor(private messageService: MessageService) {}

    getCrises() {
        return this.crises$;
    }

    getCrisis(id: number | string) {
        return this.getCrises().pipe(
            map(crises => {
                return crises.find(hero => hero.id === +id);
            })
        );
    }
}
