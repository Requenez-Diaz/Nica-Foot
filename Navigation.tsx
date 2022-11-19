import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//://www.youtube.com/watch?v=WMOPvJot0yI

//screens

import Home from "./src/screen/Profile";
import Favorite from "./src/screen/Favorite";
import ScreenAdd from "./src/screen/ScreenAdd";
import NotificationScreen from "./src/screen/Favorite";
import ProfileScreen from "./src/screen/ScreenNotification";

//Use Icon
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./src/screen/HomeScreen";
import { TouchableOpacity, View } from "react-native";

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
        tabBarActiveTintColor: "pink",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#f45133",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Cochin",
            fontWeight: "bold",
            fontSize: 25,
          },
          headerLeft: () => (
            <View style={{ paddingLeft: 10, marginLeft: 10 }}>
              <TouchableOpacity>
                <Feather name="menu" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <View style={{ paddingRight: 10, marginRight: 10 }}>
                <AntDesign name="search1" size={24} color="white" />
              </View>
            </TouchableOpacity>
          ),

          headerTitleAlign: "center",
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} /> 
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Favorites food"
        component={Favorite}
        options={{
          headerStyle: {
            backgroundColor: "#f45133",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
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
          headerStyle: {
            backgroundColor: "#f45133",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
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
          headerStyle: {
            backgroundColor: "#f45133",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
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
          headerStyle: {
            backgroundColor: "#f45133",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
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
