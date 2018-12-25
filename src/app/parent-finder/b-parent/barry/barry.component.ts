import { Parent, DifferentParent } from './../../model/parent';
import {
    Component,
    OnInit,
    forwardRef,
    SkipSelf,
    Optional
} from '@angular/core';
import { provideParent } from '../../model/provide';

@Component({
    selector: 'app-barry',
    templateUrl: './barry.component.html',
    styleUrls: ['./barry.component.css'],
    providers: [
        { provide: Parent, useExisting: forwardRef(() => BarryComponent) },
        // provideParent(BarryComponent),
        // provideParent(BarryComponent, DifferentParent)
    ]
})
export class BarryComponent implements OnInit, Parent {
    name = 'Barry';

    constructor(
        // @SkipSelf() 装饰器可以跳过局部注入器，并在注入器树中向上查找
        @SkipSelf() @Optional() public parent: Parent
    ) {}

    ngOnInit() {}
}
