import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: Number(0.7),
})`
  flex-direction: row;
  align-items: center;
`;

//@ts-ignore
export const BackIcon = styled(Feather).attrs({
  name: "chevron-left",
  size: 30,
})`
  color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.xxm}px;
  margin-left: ${({ theme }) => theme.typography.fontSize.xs}px;
  font-weight: ${({ theme }) => theme.typography.fontFamily.semiBold};
`;
