import { LoggerService } from './../../services/logger.service';
import { HeroCacheService } from './../../services/hero-cache.service';
import { Component, OnInit, Host, Optional } from '@angular/core';

@Component({
    selector: 'app-hero-contact',
    templateUrl: './hero-contact.component.html',
    styleUrls: ['./hero-contact.component.css'],
})
export class HeroContactComponent implements OnInit {
    hasLogger = false;

    constructor(
        // @Host() 函数是构造函数属性 heroCache 的装饰器
        // 确保从其父组件 HeroBioComponent 得到一个缓存服务
        // 如果该父组件不存在这个服务，Angular 就会抛出错误
        // 即使组件树的再上级有某个组件拥有这个服务，Angular 也会抛出错误
        @Host()
        private heroCache: HeroCacheService,

        // @Host() 函数是构造函数属性 loggerService 的装饰器
        // 本应用程序中只有一个在 AppComponent 级提供的LoggerService 实例
        // 该宿主 HeroBioComponent 没有自己的 LoggerService 提供商
        // @Optional() 会把 loggerService 设置为 null，并继续执行组件而不会抛出错误
        @Host()
        @Optional()
        private loggerService: LoggerService
    ) {
        if (loggerService) {
            this.hasLogger = true;
            loggerService.logInfo('HeroContactComponent can log!');
        }
    }

    ngOnInit() {}

    get phoneNumber() {
        return this.heroCache.hero.phone;
    }
}
