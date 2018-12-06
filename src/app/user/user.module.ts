import { UserService } from './../user.service.1';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [UserService] // 如果没办法指定哪个模块提供这个服务
})
export class UserModule { }
