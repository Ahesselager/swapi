import { INameable } from '../shared/interfaces/Inameable';

export class Film implements INameable {
    name: string;
    episodeId: number;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: Date;
    characters: string[];
    constructor(film?: any) {
        if (film != null) {
            Object.entries(film).forEach((prop) => {
                this[prop[0]] = prop[1];
            });
            if (film.title) {
                this.name = film.title;
            }
        }
    }
}
