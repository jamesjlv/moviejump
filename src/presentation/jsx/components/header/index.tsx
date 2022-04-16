import {
  NavigationProp,
  useNavigation,
  ParamListBase,
} from "@react-navigation/native";
import React from "react";
import { HeaderProps } from "./props";

import { BackIcon, Container } from "./styles";

export function Header({ ...rest }: HeaderProps) {
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Container onPress={goBack} {...rest}>
      <BackIcon />
    </Container>
  );
}
