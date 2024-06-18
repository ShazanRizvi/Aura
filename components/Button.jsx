import {TouchableOpacity, Text } from 'react-native'
import React from 'react'


const Button = ({btnText, containerStyles, textStyles, handlePress, isLoading}) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7} className={`bg-secondary-200 min-h-[62px] items-center justify-center rounded-lg ${containerStyles} ${isLoading? 'opacity-50':''}` } >
      <Text className={`text-lg font-psemibold ${textStyles} `}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default Button