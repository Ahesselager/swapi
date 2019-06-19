import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LogInService {

    constructor(private http: HttpClient) {
    }

    public Login(username: string, password: string): Promise<boolean> {
        return this.http.get(`login/${username}&${password}`).toPromise()
        .then(Response => !!Response)
        .catch(f => false);
        // todo (1) (AHG) - Add error handling
    }
}
