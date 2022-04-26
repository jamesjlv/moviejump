import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 40}px 0px 16px 16px;
`;

export const Movies = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const LoadingContainer = styled.View`
  align-items: center;
  margin-top: ${RFValue(200)}px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.lg}px;
    font-weight: ${theme.typography.fontFamily.bold};
    line-height: ${theme.typography.lineHeight.lg}px;
    color: ${theme.colors.title};
    margin: ${theme.typography.spacing.xm}px 0px;
  `}
`;
