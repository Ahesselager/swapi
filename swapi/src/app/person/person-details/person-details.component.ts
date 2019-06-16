import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
    selector: 'swapi-persondetails',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.scss']
})

export class PersonDetailsComponent implements OnInit {

    @Input()
    public personUrl: string;
    @Input()
    public personId: number;
    @Input()
    public person: Person;

    constructor(
        private personService: PersonService) { }
    ngOnInit(): void {
        if (!this.person) {
            if (this.personId) {
                this.personService.getSingle(this.personId).then(
                    p => this.person = p
                );
            } else if (this.personUrl) {
                this.personService.getFromFullURL(this.personUrl).then(
                    p => {
                        this.person = p;
                    }
                );
            }
        }

    }

}
