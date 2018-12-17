import { ActivatedRoute } from '@angular/router';
import { CrisisService } from './../crisis.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
    crises$: Observable<Crisis[]>;
    selectId: number;

    constructor(
        private service: CrisisService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.crises$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectId = +params.get('id');
                return this.service.getCrises();
            })
        );
    }
}
