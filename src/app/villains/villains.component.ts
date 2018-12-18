import { Component, OnInit } from '@angular/core';
import { VillainsService, Villain } from './villains.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-villains',
    templateUrl: './villains.component.html',
    styleUrls: ['./villains.component.css'],
    providers: [VillainsService]
})
export class VillainsComponent implements OnInit {
    villains: Observable<Villain[]>;

    constructor(private villainsService: VillainsService) {
        this.villains = villainsService.getVillains();
    }

    ngOnInit() {}
}
