import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../shared/rest.service';
import { Vehicle } from './vehicle';

@Injectable()
export class VehicleService extends RestService {
    constructor(http: HttpClient) {
        super(http, 'https://swapi.co/api/vehicles');
    }
    public getSingle(id: number): Promise<Vehicle> {
        return super.get(id).then(vehicle => new Vehicle(vehicle));
    }

    public getFromFullURL(url: string): Promise<Vehicle> {
        return super.get(url).then(vehicle => new Vehicle(vehicle));
    }


    public getAll(): Promise<Vehicle[]> {
        return super.get();
    }
}
