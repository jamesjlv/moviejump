import React from "react";
import { Feather } from "@expo/vector-icons";
import { IconProps } from "./props";
import { Container } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

export function IconComponent({ name, size = 24, ...rest }: IconProps) {
  return (
    <Container
      style={{ width: RFValue(size), height: RFValue(size) }}
      {...rest}
    >
      {/* @ts-ignore */}
      <Feather name={name} size={RFValue(size)} style={rest.style} />
    </Container>
  );
}
