import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Theme } from "../../../styles/theme";

export function AppTheme({ children }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
