import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: Number(0.7),
})`
  width: ${RFValue(168)}px;
  height: ${RFValue(310)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(240)}px;
  border-radius: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.md}px;
    font-weight: ${theme.typography.fontFamily.semiBold};
    line-height: ${theme.typography.lineHeight.md}px;
    color: ${theme.colors.title};
  `}

  margin-right: ${RFValue(16)}px;
  margin-top: 4px;
`;

export const Year = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm}px;
    font-weight: ${theme.typography.fontFamily.semiBold};
    line-height: ${theme.typography.lineHeight.sm}px;
    color: ${theme.colors.description};
  `}
`;

export const ContainerLoading = styled.View`
  width: 100%;
  height: ${RFValue(240)}px;
  border-radius: ${RFValue(10)}px;
  background-color: #ccc;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
`;
