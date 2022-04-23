import {
  NavigationProp,
  useNavigation,
  ParamListBase,
} from "@react-navigation/native";
import React from "react";
import { HeaderProps } from "./props";

import { BackIcon, Container, Title } from "./styles";

export function Header({ title, ...rest }: HeaderProps) {
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Container testID="HeaderComponentContainer" onPress={goBack} {...rest}>
      <BackIcon />
      {title && <Title>{title}</Title>}
    </Container>
  );
}
