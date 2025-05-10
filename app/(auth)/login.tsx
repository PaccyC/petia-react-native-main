import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { EyeClose, EyeOpen } from '@/components/svgs'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  const [formData,setFormData]= useState({
    email:'',
    password:''
  })
  return (
    <SafeAreaView className='flex w-full h-full login-background'>
      < ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1
      }}
      >
        <View className='flex-1 w-full px-6 py-10 flex gap-8 items-center justify-center'>
          {/* Logo and title*/}
          <View className='w-full flex flex-col gap-4 items-center'>

          <Text className='text-3xl text-tertiary font-semibold'>Login</Text>
          <Image className='w-32 h-32 object-contain rounded-full' source={require("@/assets/images/logo.png")}/>

          </View>
          <View className='w-full flex gap-6'>
           <View className='w-full flex flex-col gap-4'>
            <CustomInput 
            labelText='Email' 
            value={formData.email}
            onChangeText={(text)=>setFormData({...formData,email:text})}
            />
            <View className='w-full flex gap-3'>
              <CustomInput 
            labelText='Password' 
            value={formData.password}
            onChangeText={(text)=>setFormData({...formData,password:text})}
            iconRight={{close:<EyeClose/>,open:<EyeOpen/>}}
            />
            {/* <Text className='text-center font-normal text-[14px]'>
              Forgot Password? 
              <Link href="/(auth)/login" className='font-semibold cursor-pointer'><Text> Click Here</Text></Link>
              </Text> */}
            </View>

           </View>
            <CustomButton 
            title='LOGIN' 
            containerStyle="w-full bg-tertiary"
            onPress={()=>router.push("/(root)/(tabs)/home")}
            />
            <Text className='text-center font-normal text-[14px]'>
              Don't have an account? 
              <Link href="/(auth)/register" className='font-semibold cursor-pointer text-tertiary'><Text> Register</Text></Link>
              </Text>
            <View className='bg-tertiary h-[1px] w-full'/>

            <CustomButton 
            title='LOGIN WITH EMAIL' 
            containerStyle="w-full bg-tertiary"
            onPress={()=>router.push("/(root)/(tabs)/home")}
            />
             <CustomButton 
            title='LOGIN WITH FACEBOOK' 
            containerStyle="w-full bg-tertiary"
            onPress={()=>router.push("/(root)/(tabs)/home")}
            />

           </View>

           <Text className='text-lg text-center text-dark-1'>By continuing you agree to our 
           Terms & Privacy Policy</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login