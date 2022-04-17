import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react-native";
import { AppTheme } from "@/presentation/jsx/modules/theme";
import { Provider, useDispatch } from "react-redux";
import { createStore } from "redux";
import rootReducer from "@/presentation/contexts/store/modules/rootReducer";
import { ButtonComponent } from "@/presentation/jsx/components/actions/touchables/button";
import {
  handleAddGenrer,
  handleRemoveSelectedGenrer,
  handleSelectGenrer,
} from "./actions";
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

  test("Should be able to press", () => {
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
});
