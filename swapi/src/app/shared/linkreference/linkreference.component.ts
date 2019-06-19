import { Component, Input, OnInit } from '@angular/core';
import { INameable } from '../interfaces/Inameable';
import { PersonService } from 'src/app/person/person.service';
import { FilmService } from 'src/app/film/film.service';
import { Objecttype } from '../enums/Objecttype';
import { PlanetService } from 'src/app/planet/planet.service';
import { StarshipService } from 'src/app/starship/starship.service';
import { VehicleService } from 'src/app/vehicles/vehicle.service';

@Component({
    selector: 'swapi-linkreference',
    templateUrl: './linkreference.component.html',
    styleUrls: ['./linkreference.component.scss']
})

export class LinkReferenceComponent implements OnInit {
    @Input()
    url: string;
    @Input()
    type: string;

    referenceObject: INameable;

    constructor(
        private filmService: FilmService,
        private personService: PersonService,
        private planetService: PlanetService,
        private starshipService: StarshipService,
        private vehicleService: VehicleService
    ) { }
    ngOnInit(): void {
        const splitted = this.url.split('/');
        // links end on a / so we get an empty element as last index
        // the + typecasts to number
        const id = +splitted[splitted.length - 2];
        switch (this.type) {
            case Objecttype[Objecttype.film]:
                this.filmService.getSingle(id).then(
                    ref => this.referenceObject = ref
                );
                break;
            case Objecttype[Objecttype.person]:
                this.personService.getSingle(id).then(
                    ref => this.referenceObject = ref);
                break;
            case Objecttype[Objecttype.planet]:
                this.planetService.getSingle(id).then(
                    ref => this.referenceObject = ref);
                break;
            case Objecttype[Objecttype.species]:
                break;
            case Objecttype[Objecttype.starship]:
                this.starshipService.getSingle(id).then(
                    ref => this.referenceObject = ref);
                break;
            case Objecttype[Objecttype.vehicle]:
                this.vehicleService.getSingle(id).then(
                    ref => this.referenceObject = ref);
                break;
            default:
                break;
        }
    }
}
