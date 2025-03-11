import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()

  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator color="purple" size="large" />
      </View>
    );
  }

  return (
    <View className="bg-white flex-1 mt-2" style={{paddingTop: safeArea.top}}>
      <Text>{JSON.stringify(nowPlayingQuery.data, null, 2)}</Text>
    </View>
  );
};

export default HomeScreen;
