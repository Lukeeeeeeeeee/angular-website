import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { StorageService, BROWSER_STORAGE } from './storage.service';

@Component({
    selector: 'app-storage',
    templateUrl: './storage.component.html',
    styleUrls: ['./storage.component.css'],
    providers: [
        StorageService,
        { provide: BROWSER_STORAGE, useFactory: () => sessionStorage }
    ]
})
export class StorageComponent implements OnInit {
    constructor(
        // @Self() 装饰器，注入器只在该组件的注入器中查找提供商
        // @SkipSelf() 装饰器，可以让你跳过局部注入器，并在注入器树中向上查找
        // sessionStorageService 实例使用浏览器的 sessionStorage 来跟 StorageService打交道
        // localStorageService 跳过了局部注入器，使用根注入器提供的 StorageService，它使用浏览器的 localStorage API
        @Self() private sessionStorageService: StorageService,
        @SkipSelf() private localStorageService: StorageService
    ) {}

    ngOnInit() {}

    setSession() {
        this.sessionStorageService.set('hero', 'Bob-session');
    }

    setLocal() {
        this.localStorageService.set('hero', 'Bob-local');
    }
}
