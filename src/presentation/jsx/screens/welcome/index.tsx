import React from "react";

import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";
import {
  Container,
  FullImage,
  Button,
  ButtonWrapper,
  Title,
  Description,
  Content,
} from "./styles";

import WelcomeImage from "../../../../assets/welcome/WelcomeImage.png";
import { StatusBar } from "react-native";

export const Welcome: React.FC = () => {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <FullImage source={WelcomeImage} resizeMode="cover" />
      <Content />
      <Title>Let's {"\n"}Watch?</Title>
      <Description>Find the best movie to watch!</Description>
      <ButtonWrapper>
        <Button description="Start watching" onPress={() => navigate("Home")} />
      </ButtonWrapper>
    </Container>
  );
};
