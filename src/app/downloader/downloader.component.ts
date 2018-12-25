import { Component, OnInit } from '@angular/core';
import { DownloaderService } from './downloader.service';

@Component({
    selector: 'app-downloader',
    templateUrl: './downloader.component.html',
    styleUrls: ['./downloader.component.css'],
    providers: [DownloaderService]
})
export class DownloaderComponent implements OnInit {
    contents: string;

    constructor(private downloaderService: DownloaderService) {}

    ngOnInit() {}

    download() {
        this.downloaderService
            .getTextFile('assets/textfile.text')
            .subscribe(results => (this.contents = results));
    }

    clear() {
        this.contents = undefined;
    }
}
