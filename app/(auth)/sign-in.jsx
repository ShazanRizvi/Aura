import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "expo-router";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(form);
    setLoading(false);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[85px]"
          />

          <Text className="text-white font-psemibold text-xl mt-2">
            Sign In
          </Text>
          <Input
            title="Email"
            value={form.email}
            handleChange={(e) => setForm({ ...form, email: e })}
            additionalStyles="mt-5"
            keyboardType="email-address"
          />
          <Input
            type="password"
            title="Password"
            value={form.password}
            handleChange={(e) => setForm({ ...form, password: e })}
            additionalStyles="mt-5"
          />
          <View className="mt-5 mr-2 ml-2">
            <Button
              additionalStyles="h-14"
              btnText="Login"
              handlePress={handleSubmit}
              isLoading={loading}
            />
          </View>
          <View className="flex-row justify-center mt-5">
            <Text className="text-white text-base font-psemibold">
              Don't have an Account?{" "}
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary-200 text-base font-psemibold"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
