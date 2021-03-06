import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../shared/rest.service';
import { Planet } from './planets';

@Injectable()
export class PlanetService extends RestService {
    constructor(http: HttpClient) {
        super(http, 'https://swapi.co/api/planets');
    }

    public getSingle(id: number): Promise<Planet> {
        return super.get(id).then(planet => new Planet(planet));
    }

    public getFromFullURL(url: string): Promise<Planet> {
        return super.get(url).then(planet => new Planet(planet));
    }


    public getAll(): Promise<Planet[]> {
        return super.get();
    }
}
