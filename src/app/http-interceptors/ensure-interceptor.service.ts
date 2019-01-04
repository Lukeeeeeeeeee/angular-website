import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

@Injectable()
export class EnsureHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const secureReq = req.clone({
            url: req.url.replace('http://', 'https://')
        });

        return next.handle(secureReq);
    }
}
