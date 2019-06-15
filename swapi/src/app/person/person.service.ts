import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../shared/rest.service';
import { Person } from './person';

@Injectable()
export class PersonService extends RestService {
    constructor(http: HttpClient) {
        super(http, 'api/people');
    }

    public getSingle(id: number): Promise<Person> {
        return super.get(id).then(person => new Person(person));
    }

    public getFromFullURL(url: string): Promise<Person> {
        return super.getFromFullURL(url).then(person => new Person(person));
    }


    public getAll(): Promise<Person[]> {
        return super.get();
    }
}

