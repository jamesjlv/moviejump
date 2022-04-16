import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { ButtonComponent } from "../../components/actions/touchables/button";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.View`
  flex-grow: 2;
`;

export const FullImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Button = styled(ButtonComponent)`
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 36px;
`;

export const ButtonWrapper = styled.View`
  align-self: center;
  width: 90%;
  margin-bottom: ${getBottomSpace() + 40}px;
`;
