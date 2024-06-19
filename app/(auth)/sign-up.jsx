import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (name, value) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 

  const handleSubmit = async () => {
    if (!form.email || !form.password || !form.username)
      Alert.alert("Error", "Please fill all fields");
    try {
      const user = await createUser(form.email, form.password, form.username);
      router.replace("/home");
      return user;
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
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
            Sign Up
          </Text>
          <Input
            title="Username"
            value={form.username}
            handleChange={(e) => setForm({ ...form, username: e })}
            additionalStyles="mt-5"
          />
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
              btnText="Sign Up"
              handlePress={handleSubmit}
              isLoading={loading}
            />
          </View>
          <View className="flex-row justify-center mt-5">
            <Text className="text-white text-base font-psemibold">
              Already have an Account?{" "}
            </Text>
            <Link
              href="/sign-in"
              className="text-secondary-200 text-base font-psemibold"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
