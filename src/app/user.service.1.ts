import { Injectable } from '@angular/core';
import { UserModule } from './user/user.module';

/**
 * 只有当消费方导入了你创建的 UserModule 时才让 UserService 在应用中生效
 * 推荐方式
 * 如果没办法指定哪个模块该提供这个服务，则在 UserModule 模块中为该服务声明一个提供商
 */

@Injectable({
    providedIn: UserModule
})
export class UserService {
    constructor() {}
}
