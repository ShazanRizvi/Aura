import { Text, View, ScrollView, Image } from "react-native";
import { Link, SplashScreen, router, Redirect } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import Button from "../components/Button";
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync();
export default function Index() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded||error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="bg-primary max-h-[100vh]">
      <ScrollView ContentContainerStyle={{ height: '100vh' }}>
        <View className="w-full  items-center h-full px-3">
          <Image
            className="w-[120px] h-[84px]"
            source={images.logo}
            resizeMode="contain"
          />
          <Image
            className="max-w-[380px] w-full max-h-[300px]"
            source={images.cards}
            resizeMode="contain"
          />
          <View className="w-full items-center h-full px-3">
            <Text className="text-3xl font-pbold font-bold text-white text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-3xl font-bold text-secondary-200 ">
                Aura
              </Text>
            </Text>
            <Text className="text-sm mt-7 font-psemibold font-semibold text-gray-100 text-center">
              Where creativity meets passion: Embark on a journey of limitless
              exploration
            </Text>
            <View className="mt-10 w-full">
              <Button btnText="Continue with Email" containerStyles="w-full mt-7" textStyles="" handlePress={()=>router.push('/sign-up')}  />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
