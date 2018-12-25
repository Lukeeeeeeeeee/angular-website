import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export type HandleError = <T>(
    operation?: string,
    result?: T
) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandlerService {
    constructor(private messageService: MessageService) {}

    createHandleError = (serviceName = '') => <T>(
        operation = 'operation',
        result = {} as T
    ) => this.handleError(serviceName, operation, result)

    handleError<T>(
        serviceName = '',
        operation = 'operation',
        result = {} as T
    ) {
        return (error: HttpErrorResponse): Observable<T> => {
            console.error(error);

            const message =
                error.error instanceof ErrorEvent
                    ? error.error.message
                    : `服务器返回码 ${error.status} 和内容 "${error.error}"`;

            this.messageService.add(
                `${serviceName}: ${operation} 失败：${message}`
            );

            return of(result);
        };
    }
}
