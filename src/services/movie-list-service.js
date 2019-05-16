import { Movie } from "../models/movie";

export class MovieService {
    constructor() {
        this.apiKey = "";
        this.baseUrl = "";
        this.getTopRatedMovies = () => {
            let topRatedMives = [];
            [
                {
                    id: 1,
                    title: "DDLJ",
                    date: new Date(),
                    posterLink: "url"
                },
                {
                    id: 1,
                    title: "bazigar",
                    date: new Date(),
                    posterLink: "url"
                },
                {
                    id: 1,
                    title: "badshah",
                    date: new Date(),
                    posterLink: "url"
                },
                {
                    id: 1,
                    title: "dil se",
                    date: new Date(),
                    posterLink: "url"
                }
    
            ].forEach(element => {
                topRatedMives.push(new Movie(element.is, element.title, element.date, element.posterLink));   
            });

            return topRatedMives;
        }
    }
}