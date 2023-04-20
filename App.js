import React, { createContext, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LoginScreen from "./screens/LoginScreen";
import DataEntryScreen from "./screens/DataEntryScreen";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
//import Screen4 from "./screens/Screen4";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CardsListContext = createContext([]);

function MainApp() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NOVA LEITURA"
        component={DataEntryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="REGISTROS"
        component={Screen2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-supervisor-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ENVIAR REGISTROS"
        component={Screen3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="send" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="MainApp"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
