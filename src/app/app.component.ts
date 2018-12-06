import { UserService } from './user.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'User list';
    users: User[];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getUser().then(users => this.users = users);
    }
}
