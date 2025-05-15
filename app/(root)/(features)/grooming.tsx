import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import Entypo from '@expo/vector-icons/Entypo'
import SearchInput from '@/components/SearchInput'
import { Link } from 'expo-router'
import { data } from '@/constants'

const Grooming = () => {
  return (
    <LinearGradient
    colors={['white',"#f592ff1a"]}
    start={{x:0,y:0}}
    end={{x:0,y:1}}
    style={{
        width:"100%",
        shadowColor:"#000000"
    }}
    >

        <SafeAreaView className='w-full h-full '>
            <ScrollView contentContainerStyle={{
                flexGrow:1
            }}
            showsVerticalScrollIndicator={false}
            >
                <View className='w-full flex gap-5 px-6 py-4'>
                <View className='w-full relative  flex items-center flex-row justify-center'>
                    <Text className='text-2xl font-medium'>Grooming</Text>
                    <TouchableOpacity className='absolute left-0 bg-tertiary px-1 flex items-center justify-center rounded-lg'>
                    <Entypo name="chevron-left" size={24} color="white" />
                    </TouchableOpacity>
                </View>
               <LinearGradient
                colors={["#91CB4B","#F67A1F"]}
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                style={{
                    width:"100%",
                    borderRadius:15,
                    overflow:"hidden"
                }}
               >

                <View className='w-full h-auto px-4 py-5 flex flex-row items-center justify-between'>
                    <View className='flex-1 flex flex-col gap-1'>
                        <Text className='text-white text-2xl font-bold'>60% OFF</Text>
                        <Text className='text-white font-normal'>On hair & spa treatment</Text>
                    </View>
                 

                        <Image 
                        source={require("@/assets/images/cutting-hair.png")}
                        className='w-[120px] object-contain h-[120px] rounded-full'
                        />
                </View>
               </LinearGradient>

               <SearchInput onChangeText={()=>{}} placeholder='Search'/>

                <View className='w-full flex flex-row items-center justify-between'>
                    <Text className='text-dark-1 font-semibold text-xl'>Our Services</Text>
                    <Link href={"/(root)/(features)/grooming"}>
                    <Text className='text-black/60'>See All</Text>
                    </Link>
                </View>

                <View className='w-full flex flex-row gap-3 flex-wrap'>
                    {data.groomingServices.map((service)=>(
                        <View 
                        key={service.id}
                        className='bg-white h-[150px] w-[150px] rounded-lg shadow-lg px-2 py-4 flex justify-between'
                        >
                            <Image  source={service.image} className='w-full h-[70%] rounded-lg object-contain'/>
                            <Text className=' text-center text-dark-1 font-semibold text-[14px]'>{service.title}</Text>
                        </View>
                    ))}
                </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    </LinearGradient>
  )
}

export default Grooming