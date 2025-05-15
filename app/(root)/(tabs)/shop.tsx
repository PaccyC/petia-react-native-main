import { View, Text, StatusBar, Platform, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { ShoppingCart } from '@/components/svgs';
import SearchInput from '@/components/SearchInput';

const Shop = () => {
  return (
    <LinearGradient
      colors={['white', '#f592ff1a']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
      }}
    >
        <ScrollView contentContainerStyle={{
          flexGrow:1
        }}
        showsVerticalScrollIndicator={false}
        >
      <View className="w-full h-full flex gap-6">
        <View className="bg-tertiary relative rounded-b-3xl px-6 py-12 w-full flex flex-row justify-between items-center z-10">
          <View className="flex">
            <Text className="text-white text-lg font-normal">Hello Sarah</Text>
            <Text className="text-white text-2xl font-bold">Find your lovable Pets</Text>
          </View>
          <TouchableOpacity>
            <ShoppingCart />
          </TouchableOpacity>
 
           <View className='absolute bottom-8 w-full z-50'>
              <SearchInput
                placeholder="Search Something Here... "
                onChangeText={() => {}}
                containerStyle="absolute z-50  left-6 right-6 rounded-xl "
              /> 

           </View>
        </View>
        <View className="w-full flex flex-row flex-wrap justify-between mt-12 px-6 gap-y-4">
        <View className='w-[48%] flex gap-3'>
  <View className="w-full h-[150px] bg-white rounded-lg" />
  <View className="w-full h-[150px] bg-white rounded-lg" />
  <View className="w-full h-[130px] bg-white rounded-lg" />

        </View>
        <View className='w-[48%] flex gap-3'>

          <View className="w-full h-[130px] bg-white rounded-lg" />
          <View className="w-full h-[170px] bg-white rounded-lg" />
          <View className="w-full h-[130px] bg-white rounded-lg" />
        </View>

</View>

      </View>
</ScrollView>
    </LinearGradient>
  );
};

export default Shop;
