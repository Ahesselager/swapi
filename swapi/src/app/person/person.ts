import { INameable } from '../shared/interfaces/Inameable';

export class Person implements INameable {
    name: string;
    height: number;
    mass: number;
    hairColor: string;
    eyeColor: string;
    skinColor: string;
    birthYear: string;
    gender: string;
    homeworld: string;
    films: string[];
    // Why is this an array in the API?
    species: string[];
    vehicles: string[];
    starships: string[];

    constructor(person?: any) {
        if (person != null) {
            Object.entries(person).forEach((prop) => {
                this[prop[0]] = prop[1];
            });
            if (person.hair_color) {
                this.hairColor = person.hair_color;
            }
            if (person.eye_color) {
                this.eyeColor = person.eye_color;
            }
            if (person.skin_color) {
                this.skinColor = person.skin_color;
            }
        }
    }
}
