import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Welcome } from "@/src/presentation/jsx/screens/welcome";
import { ManufactureHomeScreen } from "../screens/Home";
import { ManufactureMovieScreen } from "../screens/Movie";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Home" component={ManufactureHomeScreen} />
        <Screen name="Movie" component={ManufactureMovieScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
