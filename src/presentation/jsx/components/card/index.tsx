import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { CardProps } from "./props";
import { Container, ContainerLoading, Image, Title, Year } from "./styles";

export function Card({ title, imageUrl, year, ...rest }: CardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container {...rest}>
      <Image
        source={{
          uri: imageUrl,
        }}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <ContainerLoading>
          <ActivityIndicator size={24} color="black" />
        </ContainerLoading>
      )}
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  );
}
