import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
    heroesUrl: string;
    textfile: string;
}

@Injectable()
export class ConfigService {
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient) {}

    getConfig_v1() {
        return this.http.get(this.configUrl);
    }

    getConfig_v2() {
        // 现在返回一个 Observable 类型的 Config
        return this.http.get<Config>(this.configUrl);
    }

    getConfig_3() {
        // 现在返回一个 Observable 类型的 Config
        return this.http
            .get<Config>(this.configUrl)
            .pipe(catchError(this.handleError));
    }

    getConfig() {
        // 现在返回一个 Observable 类型的 Config
        return this.http.get<Config>(this.configUrl).pipe(
            retry(3), // 最多尝试3次重新请求
            catchError(this.handleError)
        );
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(this.configUrl, { observe: 'response' });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('发生错误：', error.error.message);
        } else {
            console.error(`后端返回码 ${error.status}, 内容是：${error.error}`);
        }

        return throwError('出现错误，请重新尝试');
    }
}
