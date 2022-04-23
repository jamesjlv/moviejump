import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

// @ts-ignore
export const SearchIcon = styled(Feather).attrs({
  name: "search",
  size: 24,
})`
  margin-right: ${({ theme }) => theme.typography.spacing.xm}px;
`;

export const Input = styled(TextInput)`
  font-size: ${({ theme }) => theme.typography.spacing.xm}px; ;
`;
