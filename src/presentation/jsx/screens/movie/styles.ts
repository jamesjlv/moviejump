import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Header as HeaderComponent } from "../../components/header";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ScrollView } from "react-native-gesture-handler";

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

export const Text = styled.Text`
  font-size: 200px;
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
`;
// @ts-ignore
export const IconTime = styled(Feather).attrs({ name: "clock", size: 16 })`
  color: ${({ theme }) => theme.colors.description};
  margin-right: 8px;
`;
export const TimeText = styled.Text`
  color: ${({ theme }) => theme.colors.description};
`;
// @ts-ignore
export const IconLike = styled(Feather).attrs({ name: "thumbs-up", size: 16 })`
  color: ${({ theme }) => theme.colors.description};
  margin-right: 8px;
`;
export const Likes = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const LikeText = styled.Text`
  color: ${({ theme }) => theme.colors.description};
`;
export const Stars = styled.View`
  flex-direction: row;
  align-items: center;
`;
// @ts-ignore
export const IconStar = styled(Feather).attrs({ name: "star", size: 16 })`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.description};
`;
export const IconText = styled.Text`
  color: ${({ theme }) => theme.colors.description};
`;

export const MovieName = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 18px;
  text-align: center;
  font-weight: 600;
`;

export const MovieYear = styled.Text`
  color: ${({ theme }) => theme.colors.description};
  font-size: 12px;
  text-align: center;
  font-weight: 600;
  margin-top: 8px;
`;
export const DescriptonWrapper = styled.View``;

export const DescriptonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  text-align: left;
  font-weight: 600;
  margin: 16px 0;
`;

export const DescriptonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 24px;
`;

export const WhoComment = styled.Text`
  color: ${({ theme }) => theme.colors.description};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Header = styled(HeaderComponent)`
  position: absolute;
  padding: ${RFValue(getStatusBarHeight() + 16)}px ${RFValue(16)}px;
`;
