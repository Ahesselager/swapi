export class Starship {


    constructor(planet?: any) {
        if (planet != null) {
            Object.entries(planet).forEach((prop) => {
                this[prop[0]] = prop[1];
            });
        }
    }
}
