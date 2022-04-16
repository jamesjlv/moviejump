import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { IconComponent } from "../icon";

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: Number(0.7),
})`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.xm}px;
    font-weight: ${theme.typography.fontFamily.semiBold};
    line-height: ${theme.typography.lineHeight.xm}px;
    color: ${theme.colors.black};
  `}
`;

export const Arrow = styled(IconComponent).attrs({
  name: "chevrons-right",
  size: 12,
})`
  margin-left: 4px;
`;
