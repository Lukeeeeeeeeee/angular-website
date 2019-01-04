import { UploaderService } from './uploader.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.css'],
    providers: [UploaderService]
})
export class UploaderComponent implements OnInit {
    message: string;

    constructor(private uploaderService: UploaderService) {}

    ngOnInit() {}

    onPicked(input: HTMLInputElement) {
        const file = input.files[0];
        if (file) {
            this.uploaderService.uploader(file).subscribe(msg => {
                input.value = null;
                this.message = msg;
            });
        }
    }
}
