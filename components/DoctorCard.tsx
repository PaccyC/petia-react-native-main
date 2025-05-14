import { View, Text, Image } from 'react-native'
import React from 'react'
import { DoctorCardProps } from '@/types'
import { MapPin, Star } from './svgs'

const DoctorCard = ({
image,
name,
department,
rating,
distanceFromYou,
onPress
}:DoctorCardProps) => {
  return (
    <View className='w-full bg-white rounded-lg shadow-md px-3 py-3'>
        <View className='w-full flex flex-row gap-1 items-center'>
            <View className='w-40 h-40 overflow-hidden rounded-lg'>
            <Image className=' max-h-full max-w-full object-cover' source={image}/>
            </View>
            <View className='flex-1 flex flex-col gap-3'>
                <View className='flex gap-2'>
                    <Text className='text-xl font-medium'>{name}</Text>
                    <Text className='text-black/60 text-lg'>{department}</Text>
                </View>

                <View className='w-full flex flex-row gap-4 items-center'>
                    <View className='flex flex-row gap-1 items-center'>
                        <Star/>
                        <Text className='text-black/60 font-light text-[16px]'>{rating}</Text>
                    </View>
                    <View className='flex flex-row gap-1 items-center'>
                        <MapPin/>
                        <Text className='text-black/60 font-light text-[16px]'>{distanceFromYou} km</Text>
                    </View>
                </View>
            </View>

        </View>
    </View>
  )
}

export default DoctorCard