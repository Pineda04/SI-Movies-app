import { moviesApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async () : Promise<Movie[]> => {
  try {
    const { data } = await moviesApi.get<MovieDBMoviesResponse>(`/popular`);

    const movies = data.results.map((movieDbMovie) =>
      MovieMapper.fromTheMovieDbToMovie(movieDbMovie)
    );

    // console.log(JSON.stringify(movies, null, 2));

    return movies;
  } catch (error) {
    console.log(console.error);
    throw "No se puieron obtener las peliculas.";
  }
};
