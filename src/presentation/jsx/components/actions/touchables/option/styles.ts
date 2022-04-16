import styled from "styled-components/native";
import { OptionProps } from "./props";

export const Option = styled.TouchableOpacity<OptionProps>`
  padding: 8px 26px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : "transparent"};
  border-width: 1px;
  margin-right: 8px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  flex-direction: row;
`;

export const OptionLabel = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;
