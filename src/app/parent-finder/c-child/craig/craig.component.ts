import { Component, OnInit, Optional } from '@angular/core';
import { Base } from '../../model/base';

@Component({
    selector: 'app-craig',
    templateUrl: './craig.component.html',
    styleUrls: ['./craig.component.css']
})
export class CraigComponent implements OnInit {
    constructor(@Optional() public alex: Base) {}

    ngOnInit() {}
}
