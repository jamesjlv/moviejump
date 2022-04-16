import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Header as HeaderComponent } from "../../components/header";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ScrollView } from "react-native-gesture-handler";
import { IconComponent } from "../../components/actions/touchables/icon";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(350)}px;
  position: absolute;
`;

export const MovieDetails = styled(ScrollView)`
  flex: 1;
  margin-top: ${RFValue(300)}px;
  border-radius: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 ${RFValue(16)}px;
`;

export const ShortInfoWrapper = styled.View`
  padding: ${RFValue(24)}px ${RFValue(48)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Time = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;
// @ts-ignore
export const IconTime = styled(IconComponent).attrs({
  name: "clock",
  size: 16,
})`
  color: ${({ theme }) => theme.colors.description};
  margin-right: 4px;
`;
export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm}px;
    font-weight: ${theme.typography.fontFamily.regular};
    line-height: ${theme.typography.lineHeight.sm}px;
    color: ${theme.colors.description};
  `}
`;
// @ts-ignore
export const IconLike = styled(IconComponent).attrs({
  name: "thumbs-up",
  size: 16,
})`
  color: ${({ theme }) => theme.colors.description};
  margin-right: 4px;
`;
export const Likes = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;
export const LikeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm}px;
    font-weight: ${theme.typography.fontFamily.regular};
    line-height: ${theme.typography.lineHeight.sm}px;
    color: ${theme.colors.description};
  `}
`;
export const Stars = styled.View`
  flex-direction: row;
  align-items: center;
`;
// @ts-ignore
export const IconStar = styled(IconComponent).attrs({ name: "star", size: 16 })`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.description};
`;
export const IconText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm}px;
    font-weight: ${theme.typography.fontFamily.regular};
    line-height: ${theme.typography.lineHeight.sm}px;
    color: ${theme.colors.description};
  `}
`;

export const MovieName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.xxm}px;
    font-weight: ${theme.typography.fontFamily.semiBold};
    line-height: ${theme.typography.lineHeight.xxm}px;
    color: ${theme.colors.title};
  `}

  text-align: center;
`;

export const MovieYear = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm}px;
    font-weight: ${theme.typography.fontFamily.bold};
    line-height: ${theme.typography.lineHeight.sm}px;
    color: ${theme.colors.description};
  `}
  text-align: center;
`;
export const DescriptonWrapper = styled.View``;

export const DescriptonTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.xm}px;
    font-weight: ${theme.typography.fontFamily.bold};
    line-height: ${theme.typography.lineHeight.xm}px;
    color: ${theme.colors.title};
  `}
  text-align: left;
  margin: 16px 0;
`;

export const DescriptonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.xm}px;
    font-weight: ${theme.typography.fontFamily.regular};
    line-height: ${theme.typography.lineHeight.xm}px;
    color: ${theme.colors.text};
  `}
`;

export const LabelDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm}px;
    font-weight: ${theme.typography.fontFamily.semiBold};
    line-height: ${theme.typography.lineHeight.sm}px;
    color: ${theme.colors.description};
  `}

  margin-bottom: ${RFValue(16)}px;
`;

export const Header = styled(HeaderComponent)`
  position: absolute;
  padding: ${RFValue(getStatusBarHeight() + 16)}px ${RFValue(16)}px;
`;
