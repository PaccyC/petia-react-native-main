import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapPin } from "@/components/svgs";
import SearchInput from "@/components/SearchInput";
import { useDebounce } from "@/hooks/useDebounce";
import { Link } from "expo-router";
import { data } from "@/constants";
import DoctorCard from "@/components/DoctorCard";
import { LinearGradient } from 'expo-linear-gradient';

const Veterinary = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce(2000, searchValue);

  useEffect(() => {
    console.log("Debounced search value", debouncedValue);
  }, [debouncedValue]);
  
  return (
    <SafeAreaView className="login-background w-full h-full">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full h-full px-6 py-6 flex flex-col gap-4">
          <View className="w-full flex flex-row gap-4 items-center">
            <MapPin />
            <Text className="text-black/60 text-lg font-normal">
              Dhanmondi, Dhaka
            </Text>
          </View>

          {/* Card */}

          <LinearGradient
  colors={['#F67A1F', '#91CB4B']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={{
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  }}
>
<View className="w-full h-auto py-2 rounded-2xl">
            <View className="w-full flex flex-row justify-between items-center">
              <View className="flex gap-1 flex-1">
                <Text className="text-xl font-semibold text-black">
                  In Love With Pets?
                </Text>
                <Text className="text-sm text-white font-medium">
                  Get all what you need for them
                </Text>
              </View>
            <View className="w-36 h-28 overflow-hidden rounded-lg">
              <Image
                className="object-cover max-h-full max-w-full"
                source={require("@/assets/images/pet-care.png")}
              />
            </View>
            </View>
          </View>
</LinearGradient>
         

          {/* Searchbar */}
          <SearchInput
            onChangeText={(text) => setSearchValue(text)}
            placeholder="Search"
            value={searchValue}
          />

          {/* Categories of treatment */}

          <View className="w-full flex flex-row justify-between items-center">
            <Text className="text-lg font-semibold text-dark-1">Our Services</Text>
            <Link href="/(root)/(tabs)/home">
              <Text className="text-black/60">See all</Text>
            </Link>
          </View>
          <View className="w-full flex flex-row justify-between overflow-hidden flex-nowrap">
            {data.services.map((service) => (
              <View
                key={service.id}
                className="flex flex-col gap-1 items-center"
              >
                <Image className="w-16 h-16" source={service.image} />
                <Text className="text-tertiary font-medium">{service.title}</Text>
              </View>
            ))}
          </View>
          <Text className="text-xl font-semibold text-start">Best Specialists Nearby</Text>

          {data.doctors.map((doctor)=>(
            <DoctorCard
            key={doctor.id}
            department={doctor.department}
            distanceFromYou={doctor.distanceFromYou}
            image={doctor.image}
            name={doctor.name}
            rating={doctor.rating}
            />
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Veterinary;
