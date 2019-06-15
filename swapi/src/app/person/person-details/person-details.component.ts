import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';


@Component({
    selector: 'swapi-persondetails',
    templateUrl: './linkreference.component.html',
    styleUrls: ['./linkreference.component.scss']
})


export class PersonDetailsComponent implements OnInit {

    @Input()
    PersonUrl: string;
    @Input()
    personId: number;
    @Input()
    person: Person;

    constructor(
        private personService: PersonService) { }
    ngOnInit(): void {
        if (!this.person) {
            if (this.personId) {
                this.personService.getSingle(this.personId).then(
                    p => this.person = p
                );
            } else if (this.PersonUrl) {
                this.personService.getFromFullURL(this.PersonUrl).then(
                    p => this.person = p
                );
            }
        }

    }

}
