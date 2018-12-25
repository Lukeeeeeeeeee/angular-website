import { Component, OnInit, forwardRef } from '@angular/core';
import { Parent } from '../../model/parent';
import { Base } from '../../model/base';

@Component({
    selector: 'app-alex',
    templateUrl: './alex.component.html',
    styleUrls: ['./alex.component.css'],
    providers: [
        { provide: Parent, useExisting: forwardRef(() => AlexComponent) }
    ]
})
export class AlexComponent extends Base implements OnInit {
    name = 'Alex';

    ngOnInit() {}
}
