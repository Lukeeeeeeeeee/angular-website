import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // 从服务器获取身份令牌
        const authToken = this.authService.getAuthorizationToken();

        // 修改身份令牌
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken),
            // setHeaders: { Authorization: authToken }
        });

        return next.handle(authReq);
    }
}
