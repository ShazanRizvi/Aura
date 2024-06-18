import { View, Text, ScrollView, Image } from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import Input from "../../components/Input";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[85px]"
          />
          
          <Text className="text-white font-psemibold text-xl mt-2">Signup With Aora</Text>
          <Input title='email' value = ''/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
