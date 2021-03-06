import { INameable } from '../shared/interfaces/Inameable';

export class Vehicle implements INameable {
    name: string;
    model: string;
    manufacturer: string;
    costInCedits: number;
    length: number;
    // Misspelled in API, so we reflect it here for clarity
    maxAtmospheringSpeed: number;
    crew: number;
    passengers: number;
    cargoCapacity: number;
    consumables: string;
    vehicleClass: string;
    pilots: string[];
    films: string[];

    constructor(vehicle?: any) {
        if (vehicle != null) {
            Object.entries(vehicle).forEach((prop) => {
                this[prop[0]] = prop[1];
            });
        }
    }
}
