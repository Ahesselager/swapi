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

    constructor(starship?: any) {
        if (starship != null) {
            Object.entries(starship).forEach((prop) => {
                this[prop[0]] = prop[1];
            });
        }
    }
}
