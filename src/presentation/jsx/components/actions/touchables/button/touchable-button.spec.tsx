import React from "react";
import { ButtonComponent } from "./";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { AppTheme } from "@/presentation/jsx/modules/theme";
import faker from "@faker-js/faker";

const handleOption = jest.fn();
const makeSut = (description: string = faker.random.words()) => {
  return render(
    <ButtonComponent
      description={description}
      onPress={() => handleOption()}
    />,
    {
      wrapper: AppTheme,
    }
  );
};

describe("TouchableButton", () => {
  afterEach(() => {
    cleanup();
  });

  test("Should be able to press", () => {
    const sut = makeSut();
    fireEvent.press(sut.getByTestId("ButtonComponentContainer"));
    expect(handleOption).toBeCalled();
  });

  test("Should render the correct description", () => {
    const description = faker.random.words();
    const sut = makeSut(description);
    const buttonDescription = sut.getByTestId("ButtonComponentDescription");
    expect(buttonDescription.props.children).toBe(description);
  });
});
