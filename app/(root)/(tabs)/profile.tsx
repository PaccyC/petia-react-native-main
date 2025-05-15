import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Bell, Calendar, Map } from '@/components/svgs'
import Entypo from '@expo/vector-icons/Entypo'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

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
    <View className='w-full h-full pt-12  pb-0'>
      <ScrollView contentContainerStyle={{
        flexGrow:1
      }}
      showsVerticalScrollIndicator={false}
      >
        <View className='w-full h-full flex flex-col gap-4'>

          <View className='w-full px-6'>
          <View className='w-full relative  flex items-center flex-row justify-center '>
                    <Text className='text-2xl font-medium text-white'>Veterinary</Text>
                    <TouchableOpacity className='absolute left-0 bg-white px-1 flex items-center justify-center rounded-lg'>
                    <Entypo name="chevron-left" size={24} color="#F59245" />
                    </TouchableOpacity>
                </View>

                <View className='max-w-full h-[200px] overflow-hidden'>
                  <Image className='object-cover max-w-full' source={require("@/assets/images/doctor-1.png")}/>
                </View>
            

          </View>
        <View className='w-full px-4 pt-6 pb-4 bg-white rounded-t-3xl h-auto'>
          <View className='w-full flex flex-col gap-8'>
            {/* Details of veternary */}
            <View className='w-full flex gap-2'>
              <View className='w-full flex'>
                <Text className='text-2xl font-medium text-dark-1'>Dr. Anna Jhonason</Text>
                <Text className='text-[14px] text-black/50'>Veterinary Behavioral</Text>
              </View>
              <View className='w-full flex flex-row gap-1 justify-start items-center'>
                <View className='bg-white rounded-lg shadow-lg w-[110px] h-auto px-4 py-3 flex flex-col items-start'>
                  <Text className='text-dark-1 font-medium text-[16px]'>Experience</Text>
                  <Text className="text-tertiary font-semibold text-lg">11 years</Text>
                </View>
                <View className='bg-white rounded-lg shadow-lg w-[110px] h-auto px-4 py-3 flex flex-col items-start'>
                  <Text className='text-dark-1 font-medium text-[16px]'>Price</Text>
                  <Text className="text-tertiary font-semibold text-lg">$250</Text>
                </View>
                <View className='bg-white rounded-lg shadow-lg w-[110px] h-auto px-4 py-3 flex flex-col items-start'>
                  <Text className='text-dark-1 font-medium text-[16px]'>Location</Text>
                  <Text className="text-tertiary font-semibold text-lg">2.5 Km</Text>
                </View>
              </View>

              <View className='w-full flex flex-col'>
                <Text className='text-dark-1 font-medium text-xl'>About</Text>
                <Text className='text-[14px] text-black/50 text-base'>Dr. Maria Naiis is a highly experienced veterinarian with 11 years of dedicated practice, showcasing a pro...</Text>
              </View>
                <View className='w-full flex gap-1'>
                  <View className='w-full flex flex-row items-center justify-between pr-4'>
                    <Text className='text-xl font-medium text-dark-1'>Available Days</Text>
                    <View className='flex flex-row items-center gap-2'>
                      <Calendar/>
                      <Text className='text-black/60'>February, 2024</Text>
                    </View>
                  </View>
                  <View className='w-full flex flex-row gap-2 items-center'>
                    <View className='w-auto bg-white rounded-full border-[1px] border-tertiary px-3 py-2'>
                      <Text className='text-[14px] font-medium'>Fri,6</Text>
                    </View>
                    <View className='w-auto  rounded-full bg-tertiary  border-none px-3 py-2'>
                      <Text className='text-[14px] font-medium text-white'>Sat,7</Text>
                    </View>
                    <View className='w-auto bg-white rounded-full border-[1px] border-tertiary px-3 py-2'>
                      <Text className='text-[14px] font-medium'>Sun,8</Text>
                    </View>
                    <View className='w-auto bg-white rounded-full border-[1px] border-tertiary px-3 py-2'>
                      <Text className='text-[14px] font-medium'>Mon,9</Text>
                    </View>
                    <View className='w-auto bg-white rounded-full border-[1px] border-tertiary px-3 py-2'>
                      <Text className='text-[14px] font-medium'>Tue,10</Text>
                    </View>
                  </View>
                </View>

                <View className='w-full flex gap-1'>
                    <Text className='text-xl font-medium text-dark-1'>Available Time</Text>
                  <View className='w-full flex flex-row gap-2 items-center'>
                  <View className='w-auto  rounded-full bg-tertiary  border-none px-3 py-2'>
                      <Text className='text-[14px] font-medium text-white'>09.00</Text>
                    </View>
                    <View className='w-auto bg-white rounded-full border-[1px] border-tertiary px-3 py-2'>
                      <Text className='text-[14px] font-medium'>15.00</Text>
                    </View>
                    <View className='w-auto bg-white rounded-full border-[1px] border-tertiary  px-3 py-2'>
                      <Text className='text-[14px] font-medium'>15.00</Text>
                    </View>
                  </View>
                </View>

            </View>

            <View className='w-full flex gap-1 '>
              <CustomButton 
              icon={<Map/>}  
              onPress={()=>router.push("/(root)/(features)/grooming")} 
              title='See Location' 
              textStyle="text-light-green"
              containerStyle="bg-[#D7F3B7]"/>

             <CustomButton 
              onPress={()=>router.push("/(root)/(features)/training")} 
              title='Book Now' 
              textStyle="text-white"
              containerStyle="bg-tertiary"/>

            </View>
            
          </View>
          
        </View>
          </View>
      </ScrollView>
    </View>
        </LinearGradient>
  )
}

export default Profile