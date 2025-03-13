import { View, Text, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./movies/MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        width={200}
        height={350}
        data={movies}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster={false}/>}
        style={{
            width: width,
            height: 350,
            justifyContent: "center",
            alignItems: 'center'
        }}
        mode="parallax"
        modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50
        }}
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlideShow;
