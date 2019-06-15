import { Component, Input, OnInit } from '@angular/core';
import { Objecttype } from '../enums/Objecttype';
import { PersonService } from 'src/app/person/person.service';
import { FilmsService } from 'src/app/film/film.service';
import { StarshipService } from 'src/app/starship/starship.service';
import { VehicleService } from 'src/app/vehicles/vehicle.service';
import { PlanetService } from 'src/app/planet/planet.service';

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

    constructor(
        private filmService: FilmsService,
        private personService: PersonService,
        private planetService: PlanetService,
        private speciesService: SpeciesService,
        private starshipService: StarshipService,
        private vehicleService: VehicleService,
    ) { }
    ngOnInit(): void {
        switch (this.referenceObjectType) {
            case Objecttype.Film:
                this.filmService.getFromFullURL(this.url).then(
                    
                )
                break;
        
            default:
                break;
        }
    }
}
