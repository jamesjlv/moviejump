import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
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
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  margin-right: 16px;
  margin-top: 4px;
`;

export const Year = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.description};
`;
