import { Component, Input, OnInit } from '@angular/core';
import { Objecttype } from '../enums/Objecttype';
import { INameable } from '../interfaces/Inameable';
import { RestService } from '../rest.service';

@Component({
    selector: 'swapi-linkreference',
    templateUrl: './linkreference.component.html',
    styleUrls: ['./linkreference.component.scss']
})

export class LinkReferenceComponent implements OnInit {
    @Input()
    referenceObjectType: Objecttype;
    @Input()
    url: string;

    referenceObject: INameable;

    constructor(
        private restService: RestService
    ) { }
    ngOnInit(): void {
        this.restService.getFromFullURL(this.url).then(
            ref => this.referenceObject = ref
        );
    }
}
