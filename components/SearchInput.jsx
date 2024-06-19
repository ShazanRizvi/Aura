import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { images } from "../constants";
import { icons } from "../constants";


const SearchInput = ({
  type,
  title,
  value,
  additionalStyles,
  additionalTextStyles,
  handleChange,
  placeholder,
  ...props
}) => {
  
  return (
    <View className={` ${additionalStyles} mr-2 ml-2`}>
      <Text className={`text-gray-100 font-psemibold ${additionalTextStyles}`}>
        {title}
      </Text>
      <View className="border-2 flex-row  border-gray-900 w-full h-14 px-4 rounded-lg mt-2 bg-slate-800 focus:border-secondary-200">
        <TextInput
        placeholder={placeholder}
          className=" flex-1 text-white text-base font-psemibold w-full"
          value={value}
          onChangeText={handleChange}
         
        />
        <TouchableOpacity>
          <Image source={icons.search} className='w-5 h-full ' resizeMode="contain"/>
        </TouchableOpacity>
      </View>
      <View className='mt-6'>
          <Text className='text-gray-100 text-lg font-pregular'>
               Trending Videos
          </Text>
      </View>
    </View>
  );
};

export default SearchInput;
