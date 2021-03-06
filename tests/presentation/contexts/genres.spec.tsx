import React from "react";
import { Provider, useDispatch } from "react-redux";
import { createStore } from "redux";
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { AppTheme } from "@/src/presentation/jsx/modules/theme";
import rootReducer from "@/src/presentation/contexts/store/modules/rootReducer";
import { ButtonComponent } from "@/src/presentation/jsx/components/actions/touchables/button";
import storeProduction from "@/src/presentation/contexts/store/index";
import {
  handleAddGenrer,
  handleRemoveSelectedGenrer,
  handleSelectGenrer,
} from "@/src/presentation/contexts/store/modules/genres/actions";
import { View } from "react-native";

const initialState = {
  genres: [
    { name: "123", slug: "123", selected: false },
    { name: "1234", slug: "1234", selected: true },
  ],
};

const store = createStore(rootReducer, initialState);

export function TestComponent() {
  const dispatch = useDispatch();

  function testDispathGenrerFunctions() {
    dispatch(handleSelectGenrer("123"));
    dispatch(handleRemoveSelectedGenrer("123"));
    dispatch(handleAddGenrer([{ name: "1234", slug: "1234", selected: true }]));
  }

  return (
    <View>
      <ButtonComponent
        description="Something"
        onPress={testDispathGenrerFunctions}
      />
    </View>
  );
}

describe("Store Actions", () => {
  beforeEach(() => {
    cleanup();
  });

  test("With initials and fakes values", () => {
    const sut = render(
      <Provider store={store}>
        <TestComponent />
      </Provider>,
      {
        wrapper: AppTheme,
      }
    );
    fireEvent.press(sut.getByTestId("ButtonComponentContainer"));
  });
  test("Should be able to render with production store", () => {
    const sut = render(
      <Provider store={storeProduction}>
        <TestComponent />
      </Provider>,
      {
        wrapper: AppTheme,
      }
    );
    fireEvent.press(sut.getByTestId("ButtonComponentContainer"));
  });
});
