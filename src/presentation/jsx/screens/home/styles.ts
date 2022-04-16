import styled from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import Feather from "react-native-vector-icons/Feather";

export const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding: ${getStatusBarHeight() + 40}px 16px 16px 16px;
`;

export const SearchButton = styled(Feather).attrs({
  name: "search",
  size: 24,
})``;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 700;
  margin: 16px 0px;
`;
export const SubTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin: 16px 0px;
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
