import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor.service';
import { NoopInterceptor } from './noop-interceptor.service';
import { UploadInterceptor } from './upload-interceptor.service';
import { LoggingInterceptor } from './logging-intercepter.service';
import { TrimNameInterceptor } from './trim-name-interceptor.service';
import { CachingInterceptor } from './caching-intercepter.service';

export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },

    { provide: HTTP_INTERCEPTORS, useClass: TrimNameInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
];
