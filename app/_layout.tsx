import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { Stack } from "expo-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const RootLayout = () => {
  // Create a client
  const queryClient = new QueryClient();

  // nowPlayingAction();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
};

export default RootLayout;
