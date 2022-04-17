import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "./";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { AppTheme } from "@/presentation/jsx/modules/theme";

const handleOption = jest.fn();

const makeSut = () => {
  return render(
    <NavigationContainer>
      <Header onPress={() => handleOption()} />
    </NavigationContainer>,
    {
      wrapper: AppTheme,
    }
  );
};

describe("TouchableIcon", () => {
  beforeEach(() => {
    cleanup();
  });

  test("Should be able to press", () => {
    const sut = makeSut();
    fireEvent.press(sut.getByTestId("HeaderComponentContainer"));
    expect(handleOption).toBeCalled();
  });
});
