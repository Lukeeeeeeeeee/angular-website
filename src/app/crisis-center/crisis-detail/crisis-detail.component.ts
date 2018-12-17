import { DialogService } from './../../dialog.service';
import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) {}

    ngOnInit() {
        this.route.data.subscribe((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
        });
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() {
        const crisisId = this.crisis ? this.crisis.id : null;

        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
            relativeTo: this.route
        });
    }

    canDeactivate(): Observable<boolean> | boolean {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }

        return this.dialogService.confirm('Discard changes?');
    }
}
