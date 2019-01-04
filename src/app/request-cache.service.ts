import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpRequest } from '@angular/common/http';

export interface RequestCacheEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
}

export abstract class RequestCache {
    abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
    abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}

const maxAge = 30000;

@Injectable()
export class RequestCacheService implements RequestCache {
    cache = new Map<string, RequestCacheEntry>();

    constructor(private messager: MessageService) {}

    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);

        if (!cached) {
            return undefined;
        }

        const isExpired = cached.lastRead < (Date.now() - maxAge);
        const expired = isExpired ? '过期' : '';
        this.messager.add(
            `从 ${url}中发现 ${expired}缓存请求.`
        );
        return isExpired ? undefined : cached.response;
    }

    put(req: HttpRequest<any>, response: HttpResponse<any>): void {
        const url = req.urlWithParams;
        this.messager.add(`来自 ${url} 的缓存响应.`);

        const entry = { url, response, lastRead: Date.now() };
        this.cache.set(url, entry);

        // 移除过期缓存项
        const expired = Date.now() - maxAge;
        this.cache.forEach(item => {
            if (item.lastRead < expired) {
                this.cache.delete(item.url);
            }
        });

        this.messager.add(`请求缓存大小: ${this.cache.size}.`);
    }
}
