import React from "react";
import { StatusBar } from "react-native";
import { Option } from "../../components/actions/touchables/option";
import { Card } from "../../components/card";
import {
  Container,
  OptionsWrapper,
  SearchButton,
  Title,
  Content,
  CardsWrapper,
  SubTitle,
} from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SearchButton />
      <Title>Movies</Title>
      <OptionsWrapper>
        <Option label="Popular" selected />
        <Option label="Comedy" />
        <Option label="Action" />
        <Option label="Anime" />
        <Option label="Love" />
      </OptionsWrapper>
      <Content>
        <CardsWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsWrapper>
        <SubTitle>Trending</SubTitle>
        <CardsWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsWrapper>
      </Content>
    </Container>
  );
};
