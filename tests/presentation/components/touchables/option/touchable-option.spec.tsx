import React from "react";
import Faker from "@faker-js/faker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Option } from "@/src/presentation/jsx/components/actions/touchables/option";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { AppTheme } from "@/src/presentation/jsx/modules/theme";
import rootReducer from "@/src/presentation/contexts/store/modules/rootReducer";

const initialState = {
  genres: [
    { name: "123", slug: "123", selected: false },
    { name: "1234", slug: "1234", selected: true },
  ],
};

const store = createStore(rootReducer, initialState);

const makeSut = (label: string = Faker.random.words()) => {
  return render(
    <Provider store={store}>
      <Option label={label} slug={label} />
    </Provider>,
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
    fireEvent.press(sut.getByTestId("OptionComponentContainer"));
  });

  test("Should be able to press 2 times", () => {
    const sut = makeSut("1234");
    fireEvent.press(sut.getByTestId("OptionComponentContainer"));
    fireEvent.press(sut.getByTestId("OptionComponentContainer"));
  });

  test("Should render correct label", () => {
    const label = Faker.random.words();
    const sut = makeSut(label);
    const icon = sut.getByTestId("OptionComponentLabel");
    expect(icon.props.children).toBe(label);
  });
});
