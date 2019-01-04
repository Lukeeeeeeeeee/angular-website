import { InMemoryDataService } from './in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { MessageService } from './message.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MessageComponent } from './message/message.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { HttpInterceptorProviders } from './http-interceptors';
import { AuthService } from './auth.service';
import { UploaderComponent } from './uploader/uploader.component';
import { RequestCache, RequestCacheService } from './request-cache.service';

@NgModule({
    declarations: [
        AppComponent,
        ConfigComponent,
        DownloaderComponent,
        HeroesComponent,
        MessageComponent,
        PackageSearchComponent,
        UploaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'My-Xsrf-Cookie',
            headerName: 'My-Xsrf-Header'
        }),
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false,
            passThruUnknownUrl: true,
            put204: false
        })
    ],
    providers: [
        AuthService,
        MessageService,
        HttpErrorHandlerService,
        { provide: RequestCache, useClass: RequestCacheService },
        HttpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
