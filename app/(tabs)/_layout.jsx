import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import {icons} from '../../constants'

const TabIcons=({icon, color, name, focused})=>{
  return(
    <View className='justify-center items-center gap-2'>
      <Image source={icon} tintColor={color} className='w-6 h-6'resizeMode='contain'/>
      <Text className={`text-xs font-semibold ${focused ? 'text-blue-500 font-psemibold' : 'text-gray-500'}`}>{name}</Text>
    </View>
    
  )
}

const TabsLayout = () => {
  return (
   <Tabs screenOptions={{tabBarShowLabel:false}}>
    <Tabs.Screen name="home" options={ {title: 'Home', headerShown:false, tabBarIcon:(({color, focused})=>(
      <TabIcons icon={icons.home} name="Home" color={color} focused={focused} />
    ))}} />
    <Tabs.Screen name="bookmark" options={ {title: 'Bookmark', headerShown:false, tabBarIcon:(({color, focused})=>(
      <TabIcons icon={icons.bookmark} name="Bookmark" color={color} focused={focused} />
    ))}} />
    <Tabs.Screen name="create" options={ {title: 'Create', headerShown:false, tabBarIcon:(({color, focused})=>(
      <TabIcons icon={icons.plus} name="Create" color={color} focused={focused} />
    ))}} />
    <Tabs.Screen name="profile" options={ {title: '{Profile}', headerShown:false, tabBarIcon:(({color, focused})=>(
      <TabIcons icon={icons.profile} name="Profile" color={color} focused={focused} />
    ))}} />
   </Tabs>
  )
}

export default TabsLayout