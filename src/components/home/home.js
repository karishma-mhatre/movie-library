import { MovieService } from '../../services/movie-list-service';

export default async function HomeController() {
    let movieService  = new MovieService(MovieService);
    let homeList = document.getElementById('movies');
    
    let movies = await movieService.getTopRatedMovies();

    movies.forEach((movie) => {
        let movieNode = document.createElement("div");
        let titleText = document.createTextNode(movie.title);
        movieNode.appendChild(titleText);
        homeList.appendChild(movieNode);
    });
    let container = document.createElement("div");
    container.appendChild(homeList);
    homeList.classList.remove("hidden");
    return Promise.resolve(container.innerHTML);
}