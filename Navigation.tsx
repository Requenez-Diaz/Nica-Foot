import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
//://www.youtube.com/watch?v=WMOPvJot0yI

//screens

import Favorite from "./src/screen/Favorite";
import ScreenAdd from "./src/screen/ScreenAdd";
import ScreenNotification from "./src/screen/ScreenNotification";
import Profile from "./src/screen/Profile";
import HomeScreen from "./src/screen/HomeScreen";
//Use Icon
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, View } from "react-native";


const HomeStackNaviagator = createNativeStackNavigator();

function Tacks() {
  return (
    <HomeStackNaviagator.Navigator initialRouteName="Home">
      <HomeStackNaviagator.Screen name="Home" component={HomeScreen} />
    </HomeStackNaviagator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "#f45154",
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
        name="Stores "
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
            <Ionicons name="ios-restaurant-sharp" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Maps"
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
            <FontAwesome5 name="map-marker-alt" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Clientes"
        component={ScreenNotification}
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
            <FontAwesome5 name="users" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Mi perfil"
        component={Profile}
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
