export class MovieService {
    constructor() {
        this.url = "https://api.themoviedb.org/3/movie/top_rated?api_key=1b3cacf375adcdff89bb2a57929ef404";
    }

    async getTopRatedMovies() {
        try {
            let response = await fetch(this.url).then((response) => response.json());
            return Promise.resolve(response.results);
        }
        catch (error) {
            Promise.reject(error);
        }
    }
}