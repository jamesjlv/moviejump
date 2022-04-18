import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Routes } from "@/src/main/routes/index.stack.routes";
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
import store from "@/src/presentation/contexts/store";
import SplashScreen from "react-native-splash-screen";
export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  return (
    <Provider store={store}>
      <AppTheme>
        <Routes />
      </AppTheme>
    </Provider>
  );
}
