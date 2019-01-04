import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './heroes';
import { catchError } from 'rxjs/operators';
import {
    HandleError,
    HttpErrorHandlerService
} from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};

@Injectable()
export class HeroesService {
    heroesUrl = 'api/heroes';
    private handeError: HandleError;

    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandlerService
    ) {
        this.handeError = httpErrorHandler.createHandleError('HeroesService');
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl);
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http
            .post<Hero>(this.heroesUrl, hero, httpOptions)
            .pipe(catchError(this.handeError('addHero', hero)));
    }

    deleteHero(id: number): Observable<{}> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url, httpOptions)
            .pipe(catchError(this.handeError('deleteHero')));
    }

    updateHero(hero: Hero): Observable<Hero> {
        httpOptions.headers = httpOptions.headers.set(
            'Authorization',
            'my-new-auth-token'
        );
        return this.http
            .put<Hero>(this.heroesUrl, hero, httpOptions)
            .pipe(catchError(this.handeError('updateHero', hero)));
    }

    searchHeroes(term: string): Observable<Hero[]> {
        term = term.trim();

        const options = term
            ? { params: new HttpParams().set('name', term) }
            : {};

        return this.http.get<Hero[]>(this.heroesUrl, options).pipe(
            catchError(this.handeError<Hero[]>('searchHero', []))
        );
    }
}
