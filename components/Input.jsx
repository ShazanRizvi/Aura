import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { images } from "../constants";
import { icons } from "../constants";


const Input = ({
  type,
  title,
  value,
  additionalStyles,
  additionalTextStyles,
  handleChange,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={` ${additionalStyles} mr-2 ml-2`}>
      <Text className={`text-gray-100 font-psemibold ${additionalTextStyles}`}>
        {title}
      </Text>
      <View className="border-2 flex-row  border-gray-900 w-full h-14 px-4 rounded-lg mt-2 bg-slate-800 focus:border-secondary-200">
        <TextInput
          className=" flex-1 text-white text-base font-psemibold w-full"
          value={value}
          onChangeText={handleChange}
          secureTextEntry={type === "password" && !showPassword}
        />
        {type === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
               <Image className='w-6 h-full' resizeMode="contain" source={!showPassword? icons.eye:icons.eyeHide}/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
