
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { UserServiceConfig } from './user-service-config';

@NgModule({
    imports: [CommonModule],
    declarations: [TitleComponent],
    exports: [TitleComponent]
})
export class CoreModule {
    // 防止重复导入
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
        }
    }

    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                {provide: UserServiceConfig, useValue: config}
            ]
        };
    }
}
