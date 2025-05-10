import { Stack } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="history" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="service" />
      <Stack.Screen name="shop" />
      <Stack.Screen name="notifications"/>
      <Stack.Screen name="veterinary"/>
    </Stack>
  );
};

export default TabsLayout;
