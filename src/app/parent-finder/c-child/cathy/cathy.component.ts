import { Component, OnInit, Optional } from '@angular/core';
import { AlexComponent } from '../../a-grandparent/alex/alex.component';

@Component({
    selector: 'app-cathy',
    templateUrl: './cathy.component.html',
    styleUrls: ['./cathy.component.css']
})
export class CathyComponent implements OnInit {
    constructor(@Optional() public alex: AlexComponent) {}

    ngOnInit() {}
}
