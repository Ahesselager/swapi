export class Person {
    name: string;
    height: number;
    mass: number;
    hairColor: string;
    eyeColor: string;
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
        }
    }
}
