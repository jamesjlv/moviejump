import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { App } from ".";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Full App", () => {
  it("Renders", async () => {
    await waitFor(() => {
      render(<App />);
    });
  });
});
