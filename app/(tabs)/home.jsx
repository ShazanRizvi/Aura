import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={[{ key: "a" }, { key: "b" }]}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.key}</Text>
        )}
        ListHeaderComponent={() => (
          <View>
          <View className="mt-5 px-4 flex-row items-center justify-between">
            <View>
              <Text className="text-base text-gray-300 font-pmedium">
                Welcome Back
              </Text>
              <Text className="text-3xl text-white font-pbold">Syed</Text>
            </View>
            <View>
              <Image
                className="w-10 h-10"
                resizeMode="contain"
                source={images.logoSmall}
              />
            </View>
          </View>
          <SearchInput/>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
