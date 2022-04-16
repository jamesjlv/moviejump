import React from "react";
import { Container, Image, Title, Year } from "./styles";

export function Card() {
  return (
    <Container>
      <Image
        source={{
          uri: "https://pbs.twimg.com/media/FLmnQNdVkAAFvPt?format=jpg&name=medium",
        }}
      />
      <Title>Doctor Strange - Multiverse of Madness</Title>
      <Year>2022</Year>
    </Container>
  );
}
