import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//://www.youtube.com/watch?v=WMOPvJot0yI

//screens

import Home from "./src/screen/Profile";
import FavoriteScreen from "./src/screen/HomeScreen";
import ScreenAdd from "./src/screen/ScreenAdd";
import NotificationScreen from "./src/screen/Favorite";
import ProfileScreen from "./src/screen/ScreenNotification"; 

//Use Icon
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from './src/screen/HomeScreen';

const HomeStackNaviagator = createNativeStackNavigator();

function Tacks() {
  return (
    <HomeStackNaviagator.Navigator initialRouteName="Home">
      <HomeStackNaviagator.Screen name="Home" component={Home} />
    </HomeStackNaviagator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Busca tu comida favorite"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Favorites food"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="favorite" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Add"
        component={ScreenAdd}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={35} color="gray" />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen 
        name="Mi perfil" 
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}