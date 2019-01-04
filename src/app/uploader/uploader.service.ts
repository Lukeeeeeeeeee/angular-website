import { MessageService } from './../message.service';
import {
    HttpRequest,
    HttpClient,
    HttpEvent,
    HttpEventType,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, last, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UploaderService {
    constructor(private http: HttpClient, private messager: MessageService) {}

    uploader(file: File) {
        const req = new HttpRequest('POST', '/upload/file', file, {
            reportProgress: true
        });

        return this.http.request(req).pipe(
            map(event => this.getEventMessage(event, file)),
            tap(message => this.showProgress(message)),
            last(),
            catchError(this.handleError(file))
        );
    }
    private getEventMessage(event: HttpEvent<any>, file: File) {
        switch (event.type) {
            case HttpEventType.Sent:
                return `上传文件为 ${file.name}, 其大小为 ${file.size}.`;
            case HttpEventType.UploadProgress:
                const percentDone = Math.round(
                    (100 * event.loaded) / event.total
                );
                return `文件 ${file.name} 已上传 ${percentDone}%`;
            case HttpEventType.Response:
                return `文件 ${file.name} 已上传成功`;
            default:
                return `文件 ${file.name} 奇怪的上传活动：${event.type}`;
        }
    }

    private showProgress(message: string) {
        this.messager.add(message);
    }

    private handleError(file: File) {
        const userMessage = `${file.name} 上传失败`;

        return (error: HttpErrorResponse) => {
            console.error(error);
            const message =
                error.error instanceof Error
                    ? error.error.message
                    : `错误码 ${error.status}, 内容 ${error.error}`;

            this.messager.add(`${userMessage} ${message}`);

            return of(userMessage);
        };
    }
}
