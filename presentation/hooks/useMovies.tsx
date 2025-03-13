import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 horas (el tiempo que queremos que se almacene en cache)
    })

    const popularMoviesQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 horas (el tiempo que queremos que se almacene en cache)
    })

    const topRatedMoviesQuery = useQuery({
        queryKey: ['movies', 'top_rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 horas (el tiempo que queremos que se almacene en cache)
    })

    const upcomingMoviesQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 horas (el tiempo que queremos que se almacene en cache)
    })

    return {
        nowPlayingQuery,
        popularMoviesQuery,
        topRatedMoviesQuery,
        upcomingMoviesQuery
    }
}