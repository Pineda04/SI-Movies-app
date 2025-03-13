import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/MainSlideShow";
import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()

  const { nowPlayingQuery, popularMoviesQuery, topRatedMoviesQuery, upcomingMoviesQuery } = useMovies();

  if (nowPlayingQuery.isLoading || popularMoviesQuery.isLoading || topRatedMoviesQuery.isLoading || upcomingMoviesQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator color="purple" size="large" />
      </View>
    );
  }

  return (
    <View className="bg-white flex-1 mt-2" style={{paddingTop: safeArea.top}}>
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

      {/* Carrousel de imagenes */}
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />

      {/* Peliculas populares */}
      <MoviesHorizontalList movies={popularMoviesQuery.data ?? []} tittle="Peliculas populares" />

      {/* top rated*/}
      <MoviesHorizontalList movies={topRatedMoviesQuery.data ?? []} tittle="Peliculas mejores evaluadas"/>

      {/* Upcoming */}
      <MoviesHorizontalList movies={upcomingMoviesQuery.data ?? []} tittle="Proximas peliculas"/>
    </View> 
  );
};

export default HomeScreen;
