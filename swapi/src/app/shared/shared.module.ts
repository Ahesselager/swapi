import { NgModule } from '@angular/core';
import { LinkReferenceComponent } from './linkreference/linkreference.component';
import { PersonService } from '../person/person.service';
import { StarshipService } from '../starship/starship.service';
import { VehicleService } from '../vehicles/vehicle.service';
import { FilmService } from '../film/film.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LogInService } from './login.service';
import { PlanetService } from '../planet/planet.service';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule
    ],
    exports: [
        LinkReferenceComponent
    ],
    declarations: [
        LinkReferenceComponent
    ],
    providers: [
        PersonService,
        StarshipService,
        VehicleService,
        FilmService,
        PlanetService,
        HttpClient,
        LogInService
    ]
})
export class SharedModule { }
