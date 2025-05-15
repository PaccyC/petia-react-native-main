import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const FeaturesLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="notifications"/>
      <Stack.Screen name="veterinary"/>
      <Stack.Screen name="grooming"/>
      <Stack.Screen name="training"/>
    </Stack>
  )
}

export default FeaturesLayout