import React from "react";
import { IconComponent } from "@/src/presentation/jsx/components/actions/touchables/icon";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { AppTheme } from "@/src/presentation/jsx/modules/theme";

const handleOption = jest.fn();

const makeSut = (nameIcon: string = "chevron-left") => {
  return render(
    <IconComponent name={nameIcon} onPress={() => handleOption()} />,
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
    fireEvent.press(sut.getByTestId("IconComponentContainer"));
    expect(handleOption).toBeCalled();
  });

  test("Should render an icon mail", () => {
    const sut = makeSut("mail");
    const icon = sut.getByTestId("IconComponentContainer");
    expect(icon.props.children[0].props.name).toBe("mail");
  });
});
