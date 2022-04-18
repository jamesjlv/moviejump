import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Welcome } from "@/src/presentation/jsx/screens/welcome";
import { render, fireEvent } from "@testing-library/react-native";
import { AppTheme } from "@/src/presentation/jsx/modules/theme";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

const makeSut = () => {
  return render(
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>,
    {
      wrapper: AppTheme,
    }
  );
};

describe("WelcomeScreen", () => {
  test("Should be able to next page", async () => {
    const sut = makeSut();
    const buttonNextPage = await sut.getByTestId("ButtonComponentContainer");
    fireEvent.press(buttonNextPage);
  });
});
