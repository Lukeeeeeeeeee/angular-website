import { Component, OnInit } from '@angular/core';
import { provideParent } from '../../model/provide';
import { Parent } from '../../model/parent';

@Component({
    selector: 'app-alice',
    templateUrl: './alice.component.html',
    styleUrls: ['./alice.component.css'],
    providers: [
        provideParent(AliceComponent)
    ]
})
export class AliceComponent implements OnInit, Parent {
    name = 'Alice';

    constructor() {}

    ngOnInit() {}
}
