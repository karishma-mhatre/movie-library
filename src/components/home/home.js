import { MovieService } from '../../services/movie-list-service';
import { Movie } from '../../models/movie';

export default function HomeController() {
    let movieService = new MovieService();
    let movies = movieService.getTopRatedMovies();
    let homeList = document.getElementById('movies');
    
    movies.forEach((movie) => {
        let movieNode = document.createElement("div");
        let titleText = document.createTextNode(movie.title);
        movieNode.appendChild(titleText);
        homeList.appendChild(movieNode);
    })
    homeList.classList.remove("hidden");

    let container = document.createElement("div");
    container.appendChild(homeList);
    return container.innerHTML;
}