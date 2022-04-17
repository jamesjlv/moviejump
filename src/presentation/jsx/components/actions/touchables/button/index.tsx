import React from "react";
import { TouchableButtonProps } from "./props";
import Feather from "react-native-vector-icons/Feather";
import { Arrow, Container, Description } from "./styles";

export function ButtonComponent({
  description,
  ...rest
}: TouchableButtonProps) {
  return (
    <Container {...rest} testID="ButtonComponentContainer">
      <Description testID="ButtonComponentDescription">
        {description}
      </Description>
      <Arrow />
    </Container>
  );
}
