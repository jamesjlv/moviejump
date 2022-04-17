import React from "react";
import { Card } from "./";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { AppTheme } from "../../modules/theme";

import faker from "@faker-js/faker";

const handleOption = jest.fn();
const makeSut = (
  description: string = faker.random.words(),
  year: number = faker.datatype.number({ max: 4 }),
  imageUrl: string = faker.image.imageUrl()
) => {
  return render(
    <Card
      title={description}
      year={year}
      imageUrl={imageUrl}
      onPress={() => handleOption()}
    />,
    {
      wrapper: AppTheme,
    }
  );
};

describe("Movie Card", () => {
  afterEach(() => {
    cleanup();
  });

  test("Should be able to press", () => {
    const sut = makeSut();
    const cardComponent = sut.getByTestId("CardComponentContainer");
    fireEvent.press(cardComponent);
    expect(handleOption).toBeCalled();
  });

  test("Should render the correct title", () => {
    const description = faker.random.words();
    const sut = makeSut(description);
    const cardComponent = sut.getByTestId("CardComponentTitle");
    expect(cardComponent.props.children).toBe(description);
  });
  test("Should render the correct year", () => {
    const description = faker.random.words();

    const year = faker.datatype.number({ max: 4 });
    const sut = makeSut(description, year);
    const cardComponent = sut.getByTestId("CardComponentYear");
    expect(cardComponent.props.children).toBe(year);
  });
});
