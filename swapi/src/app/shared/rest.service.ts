import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class RestService {

    constructor(private http: HttpClient, private resourceUrl: string) {
    }

    private createResourceUrl(id?: string | number) {
        let resourceUrl = 'https://swapi.co/' + this.resourceUrl;

        if (id != null) {
            resourceUrl += '/' + id;
        }

        return resourceUrl;
    }

    public get(id?: string | number, params?: { [index: string]: any }, handleErrors = true): Promise<any> {
        const resourceUrl = this.createResourceUrl(id);

        return this.http.get(resourceUrl).toPromise();
        // todo (1) (AHG) - Add error handling
    }

    public getFromFullURL(url: string): Promise<any> {
        return this.http.get(url).toPromise();
    }
}
