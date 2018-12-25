import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { MessageService } from './message.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpErrorHandlerService } from './http-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [MessageService, HttpErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
