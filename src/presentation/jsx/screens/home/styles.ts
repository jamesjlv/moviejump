import styled, { css } from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding: ${getStatusBarHeight() + 40}px 16px 16px 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.xxl}px;
    font-weight: ${theme.typography.fontFamily.bold};
    line-height: ${theme.typography.lineHeight.xxl}px;
    color: ${theme.colors.title};
    margin: ${theme.typography.spacing.xm}px 0px;
  `}
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

export const OptionsWrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const CardsWrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Content = styled.View`
  /* flex: 1; */
  margin-top: 32px;
  padding-bottom: ${getBottomSpace() + 48}px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
