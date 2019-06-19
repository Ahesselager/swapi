import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../shared/rest.service';
import { Film } from './film';

@Injectable()
export class FilmService extends RestService {
    constructor(http: HttpClient) {
        super(http, 'https://swapi.co/api/films');
    }
    public getSingle(id: number): Promise<Film> {
        return super.get(id).then(film => new Film(film));
    }

    public getFromFullURL(url: string): Promise<Film> {
        return super.get(url).then(film => new Film(film));
    }


    public getAll(): Promise<Film[]> {
        return super.get();
    }
}
