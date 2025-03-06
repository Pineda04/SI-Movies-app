import { Movie } from "../interfaces/movie.interface";
import { MovieResult } from "../interfaces/moviedb-response";

export class MovieMapper {
    static fromTheMovieDbToMovie(movie: MovieResult) : Movie{
        return {
            id: movie.id,
            tittle: movie.title,
            description: movie.overview,
            releaseDate: movie.release_date,
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        }
    }
}