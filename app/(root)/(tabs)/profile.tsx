import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { MapPin } from '@/components/svgs'
import Entypo from '@expo/vector-icons/Entypo'
import { data } from '@/constants'

const Profile = () => {
  return (
      <LinearGradient
      colors={['#F67A1F', '#91CB4B']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        width: '100%',
        borderRadius: 16,
        shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 4,
        // elevation: 4,
      }}
      >
    <View className='w-full h-full pt-12 px-6 pb-0'>
      <ScrollView contentContainerStyle={{
        flexGrow:1
      }}>

          <View className='w-full h-full flex flex-col gap-4'>
          <View className='w-full relative  flex items-center flex-row justify-center '>
                    <Text className='text-2xl font-medium text-white'>Veterinary</Text>
                    <TouchableOpacity className='absolute left-0 bg-white px-1 flex items-center justify-center rounded-lg'>
                    <Entypo name="chevron-left" size={24} color="#F59245" />
                    </TouchableOpacity>
                </View>

                <View className='max-w-full h-[200px] overflow-hidden'>
                  <Image className='object-cover max-w-full' source={require("@/assets/images/doctor-1.png")}/>
                </View>
            

        <View></View>
          </View>
      </ScrollView>
    </View>
        </LinearGradient>
  )
}

export default Profile