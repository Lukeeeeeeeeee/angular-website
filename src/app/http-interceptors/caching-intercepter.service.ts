import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpResponse
} from '@angular/common/http';

import { RequestCache } from '../request-cache.service';
import { searchUrl } from '../package-search/package-search.service';
import { Observable, of } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: RequestCache) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!isCachable(req)) {
            return next.handle(req);
        }

        const cachedResponse = this.cache.get(req);

        if (req.headers.get('x-refresh')) {
            const resluts$ = sendRequest(req, next, this.cache);
            return cachedResponse
                ? resluts$.pipe(startWith(cachedResponse))
                : resluts$;
        }
        return cachedResponse
            ? of(cachedResponse)
            : sendRequest(req, next, this.cache);
    }
}

function isCachable(req: HttpRequest<any>) {
    // 只有 GET 请求被缓存
    return req.method === 'GET' && -1 < req.url.indexOf(searchUrl);
}

function sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache
): Observable<HttpEvent<any>> {
    const noHeaderReq = req.clone({ headers: new HttpHeaders() });

    return next.handle(noHeaderReq).pipe(
        tap(event => {
            if (event instanceof HttpResponse) {
                cache.put(req, event);
            }
        })
    );
}
