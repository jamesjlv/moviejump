/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import { Theme } from "../../presentation/styles/theme";

declare module "styled-components" {
  type ThemeType = typeof Theme;
  export interface DefaultTheme extends ThemeType {}
}
