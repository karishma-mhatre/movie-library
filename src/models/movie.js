export class Movie {
    constructor(id, title, date, posterLink) {
        this.id = id;
        this.title = title;
        this.date= date;
        this.posterLink = posterLink;
    }

    get releaseYear() {
        return new Date(this.date).getFullYear();
    }

}