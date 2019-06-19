import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

interface IHttpOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}

@Injectable()
export abstract class RestService {
    constructor(private http: HttpClient, private resourceUrl: string) {
        this.options = { responseType: 'json' };
    }

    private readonly options: IHttpOptions;

    protected get(id?: string | number, params?: { [index: string]: any }, handleErrors = true): Promise<any> {
        const resourceUrl = this.createResourceUrl(id);
        const httpParams = this.buildParams(params);
        console.log(resourceUrl);

        return this.http.get(resourceUrl, { ...this.options, params: httpParams }).toPromise()
            .catch(res => res);
    }

    public update(object: any, id?: string | number, params?: { [index: string]: any }, handleErrors = true): Promise<any> {
        const resourceUrl = this.createResourceUrl(id);
        const httpParams = this.buildParams(params);

        return this.http.patch(resourceUrl, object, { ...this.options, params: httpParams }).toPromise()
            .catch(res => res);
    }

    protected delete(id: string | number, params?: { [index: string]: any }, options?: any, handleErrors = true): Promise<any> {
        const resourceUrl = this.createResourceUrl(id);
        const httpParams = this.buildParams(params);
        const httpOptions = options ? Object.assign({}, this.options, options) : this.options;

        return this.http.delete(resourceUrl, { ...httpOptions, params: httpParams }).toPromise()
            .catch(res => res);
    }

    protected post(url: string, body?: any, params?: { [index: string]: any }, handleErrors = true): Promise<any> {
        const httpParams = this.buildParams(params);

        return this.http.post(`${this.resourceUrl}/${url}`, body, { ...this.options, params: httpParams }).toPromise()
            .catch(res => res);
    }

    private createResourceUrl(id?: string | number) {
        let resourceUrl = this.resourceUrl;

        if (id != null) {
            resourceUrl += '/' + id;
        }

        return resourceUrl;
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
