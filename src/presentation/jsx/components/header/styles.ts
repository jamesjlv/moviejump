import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: Number(0.7),
})``;

export const BackIcon = styled(Feather).attrs({
  name: "chevron-left",
  size: 30,
})`
  color: ${({ theme }) => theme.colors.white};
`;
