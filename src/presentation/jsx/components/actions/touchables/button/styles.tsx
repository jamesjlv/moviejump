import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: Number(0.7),
})`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text``;

export const Arrow = styled(Feather).attrs({
  name: "chevrons-right",
  size: 12,
})`
  margin-left: 4px;
`;
