import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class LogInService {

    constructor(private http: HttpClient) {
    }

    public Login(username: string, password: string): Promise<boolean> {
        const httpParams = this.buildParams([username, password]);
        return this.http.get('login/', { params: httpParams }).toPromise()
            .then(Response => !!Response)
            .catch(f => false);
        // todo (1) (AHG) - Add error handling
    }

    private buildParams(params?: { [index: string]: any }): HttpParams {
        let httpParams = new HttpParams();
        if (!params) {
            return httpParams;
        }

        for (const param in params) {
            if (params.hasOwnProperty(param)) {
                if (Array.isArray(params[param])) {
                    for (const p of params[param]) {
                        httpParams = httpParams.append(param, p);
                    }
                } else {
                    httpParams = httpParams.append(param, params[param]);
                }
            }
        }

        return httpParams;
    }
}
