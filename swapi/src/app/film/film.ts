export class Film {
    title: string;
    episodeId: number;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: Date;
    characters: string[];
    constructor(person?: any) {
        if (person != null) {
            Object.entries(person).forEach((prop) => {
                this[prop[0]] = prop[1];
            });
        }
    }
}
