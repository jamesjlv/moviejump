import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: Number(0.7),
})``;

//@ts-ignore
export const BackIcon = styled(Feather).attrs({
  name: "chevron-left",
  size: 30,
})`
  color: ${({ theme }) => theme.colors.black};
`;
