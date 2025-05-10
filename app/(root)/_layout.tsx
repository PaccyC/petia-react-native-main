import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TabsLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='home'/>
        <Stack.Screen name='history'/>
        <Stack.Screen name='profile'/>
        <Stack.Screen name='service'/>
        <Stack.Screen name='shop'/>

    </Stack>
  )
}

export default TabsLayout