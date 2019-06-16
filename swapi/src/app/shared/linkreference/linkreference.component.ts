import { Component, Input, OnInit } from '@angular/core';
import { INameable } from '../interfaces/Inameable';
import { PersonService } from 'src/app/person/person.service';

@Component({
    selector: 'swapi-linkreference',
    templateUrl: './linkreference.component.html',
    styleUrls: ['./linkreference.component.scss']
})

export class LinkReferenceComponent implements OnInit {
    @Input()
    url: string;

    referenceObject: INameable;

    constructor(
        // TODO (1) AHG - Dirty hack to workaround for abstract class
        private restService: PersonService
    ) { }
    ngOnInit(): void {
        this.restService.getFromFullURL(this.url).then(
            ref => this.referenceObject = ref
        );
    }
}
