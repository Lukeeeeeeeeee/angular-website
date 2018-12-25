import { Component, OnInit, Optional } from '@angular/core';
import { Parent } from '../../model/parent';

@Component({
    selector: 'app-chris',
    templateUrl: './chris.component.html',
    styleUrls: ['./chris.component.css']
})
export class ChrisComponent implements OnInit {
    name = 'Chris';

    constructor(@Optional() public parent: Parent) {}

    ngOnInit() {}
}
