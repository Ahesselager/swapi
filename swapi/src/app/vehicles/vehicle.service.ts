import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiRestService } from '../shared/rest.service';
import { Vehicle } from './vehicle';

@Injectable()
export class VehicleService extends SwapiRestService {
    constructor(http: HttpClient) {
        super(http, 'api/vehicles');
    }
    public getSingle(id: number): Promise<Vehicle> {
        return super.get(id).then(vehicle => new vehicle(vehicle));
    }

    public getFromFullURL(url: string): Promise<Vehicle> {
        return super.getFromFullURL(url).then(vehicle => new vehicle(vehicle));
    }


    public getAll(): Promise<Vehicle[]> {
        return super.get();
    }
}
