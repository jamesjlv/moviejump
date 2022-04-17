import React from "react";
import { Provider } from "react-redux";
import { Routes } from "../../../../main/routes/index.stack.routes";
import { AppTheme } from "../theme";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import store from "@/presentation/contexts/store";

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <Provider store={store}>
      <AppTheme>
        <Routes />
      </AppTheme>
    </Provider>
  );
}
