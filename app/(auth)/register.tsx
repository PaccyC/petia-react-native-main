import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { EyeClose, EyeOpen } from '@/components/svgs'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = () => {
  const [formData,setFormData]= useState({
    names:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  return (
    <SafeAreaView className='flex w-full h-full login-background'>
      < ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1
      }}
      >
        <View className='flex-1 w-full px-6 py-10 flex gap-6 items-center justify-center'>
          {/* Logo and title*/}
          <View className='w-full flex flex-col gap-4 items-center'>

          <Text className='text-3xl text-tertiary font-semibold'>Register</Text>
          <Image className='w-32 h-32 object-contain rounded-full' source={require("@/assets/images/logo.png")}/>

          </View>
          <View className='w-full flex gap-6'>
           <View className='w-full flex flex-col gap-4'>
           <CustomInput 
            labelText='Names' 
            value={formData.names}
            onChangeText={(text)=>setFormData({...formData,names:text})}
            />
            <CustomInput 
            labelText='Email' 
            value={formData.email}
            onChangeText={(text)=>setFormData({...formData,email:text})}
            />
          
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
            <CustomInput 
            labelText='Confirm Password' 
            value={formData.password}
            onChangeText={(text)=>setFormData({...formData,confirmPassword:text})}
            iconRight={{close:<EyeClose/>,open:<EyeOpen/>}}
            />



           </View>
            <CustomButton 
            title='REGISTER' 
            containerStyle="w-full bg-tertiary"
            onPress={()=>router.push("/(root)/(tabs)/home")}
            />
            <Text className='text-center font-normal text-[14px]'>
              Already have an account? 
              <Link href="/(auth)/login" className='font-semibold cursor-pointer text-tertiary'><Text> Login</Text></Link>
              </Text>

           </View>

           <Text className='text-lg text-center text-dark-1'>By continuing you agree to our 
           Terms & Privacy Policy</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register