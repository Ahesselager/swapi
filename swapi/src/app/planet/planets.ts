export class Planet {
    name: string;
    rotationPeriod: number;
    orbitalPeriod: number;
    diameter: number;
    climate: string;
    gravity: string;
    // Why isn't this an array in the API?
    terrain: string;
    surfaceWater: number;
    population: number;
    residents: string[];
    films: string[];

    constructor(planet?: any) {
        if (planet != null) {
            Object.entries(planet).forEach((prop) => {
                this[prop[0]] = prop[1];
            });
        }
    }
}
