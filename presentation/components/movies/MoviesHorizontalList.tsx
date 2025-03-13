import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, FlatList } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  tittle: string;
}

const MoviesHorizontalList = ({ movies, tittle }: Props) => {
  return (
    <View>
      <Text className="text-2xl font-bold px-4 mb-2 mt-2">{tittle}</Text>

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
        )}
      />
    </View>
  );
};

export default MoviesHorizontalList;
