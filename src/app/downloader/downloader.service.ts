import { MessageService } from './../message.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class DownloaderService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}

    getTextFile(filename: string) {
        return this.http.get(filename, { responseType: 'text' }).pipe(
            tap(
                // 记录结果或错误
                data => this.log(filename, data),
                error => this.logError(filename, error)
            )
        );
    }

    private log(filename: string, data: string) {
        const message = `DownloaderService 下载了 "${filename}" and 获取如下 "${data}".`;
        this.messageService.add(message);
    }

    private logError(filename: string, error: any) {
        const message = `DownloaderService 下载失败 "${filename}"; 出错 "${
            error.message
        }".`;
        console.error(message);
        this.messageService.add(message);
    }
}
