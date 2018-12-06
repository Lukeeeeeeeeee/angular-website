import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
    title = 'NgModules';
    user = '';

    constructor(public userService: UserService) {
        this.user = userService.userName;
    }

    ngOnInit() {}
}
