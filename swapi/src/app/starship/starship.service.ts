import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../shared/rest.service';
import { Starship } from './starship';

@Injectable()
export class StarshipsService extends RestService {
    constructor(http: HttpClient) {
        super(http, 'api/Starships');
    }

    public getSingle(id: number): Promise<Starship> {
        return super.get(id).then(starship => new Starship(starship));
    }

    public getFromFullURL(url: string): Promise<Starship> {
        return super.getFromFullURL(url).then(starship => new Starship(starship));
    }


    public getAll(): Promise<Starship[]> {
        return super.get();
    }
}