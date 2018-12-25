import { Parent } from './../../model/parent';
import { Component, OnInit, Optional } from '@angular/core';

@Component({
    selector: 'app-carol',
    templateUrl: './carol.component.html',
    styleUrls: ['./carol.component.css']
})
export class CarolComponent implements OnInit {
    name = 'Carol';

    constructor(
        // 当属性带有 @Optional() 标记时，Angular就会把 parent 设置为 null
        // 并且继续执行组件而不会抛出错误
        @Optional() public parent: Parent
    ) {}

    ngOnInit() {}
}
