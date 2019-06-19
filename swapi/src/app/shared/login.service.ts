import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestService } from './rest.service';

@Injectable()
export class LogInService extends RestService {

    constructor(http: HttpClient) {
        super(http, 'http://localhost:51107/api/users/');
    }

    public Login(name: string, pw: string): Promise<boolean> {
        return super.get('login', { 'username': name, 'password': pw }).then(success => !!success);
    }


}
