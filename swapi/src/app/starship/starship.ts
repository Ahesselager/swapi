import { INameable } from '../shared/interfaces/Inameable';

export class Starship implements INameable {
    name: string;
    model: string;
    manufacturer: string;
    costInCredits: number;
    length: number;
    // Is string to accomodate N/A values
    maxAtmospheringSpeed: string;
    crew: number;
    passengers: number;
    cargoCapacity: number;
    consumables: string;
    hyperdriveEating: number;
    MGLT: number;
    starshipClass: string;
    pilots: string[];
    films: string[];

    constructor(planet?: any) {
        if (planet != null) {
            Object.entries(planet).forEach((prop) => {
                this[prop[0]] = prop[1];
            });
        }
    }
}
