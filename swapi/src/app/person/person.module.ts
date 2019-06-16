import { PersonService } from './person.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [PersonDetailsComponent],
    declarations: [PersonDetailsComponent],
    providers: []
})
export class PersonModule { }
