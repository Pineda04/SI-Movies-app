import { View, Text, Pressable, Image } from "react-native";

interface Props {
  // movie: Movie <- No recomendado asi porque nos da mas información de la que ocupamos
  poster: string; // <- Mejor asi
  id: number;
  classname?: string;
  smallPoster?: boolean;
}

const MoviePoster = ({ id, poster, classname, smallPoster = false }: Props) => {
  return (
    <Pressable className={`active:opacity-85 px-2 ${classname}`}>
      <Image
        source={{ uri: `${poster}` }}
        className="w-full h-full shadow-lg rounded-2xl"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      ></Image>
    </Pressable>
  );
};

export default MoviePoster;
