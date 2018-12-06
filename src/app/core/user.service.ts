import { Injectable, Optional } from '@angular/core';
import { UserServiceConfig } from './user-service-config';

let nextId = 1;

@Injectable({
    providedIn: 'root'
})
export class UserService {
    id = nextId++;
    private _userName = 'User';

    // 如果 UserServiceConfig 存在，就从这个配置中设置用户名
    constructor(@Optional() config: UserServiceConfig) {
        if (config) {
            this._userName = config.userName;
        }
    }

    get userName() {
        const suffix = this. id > 1 ? `times ${this.id}` : '';
        return this._userName + suffix;
    }
}
