import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { CardProps } from "./props";
import { Container, ContainerLoading, Image, Title, Year } from "./styles";

export function Item({ title, imageUrl, year, ...rest }: CardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container testID="ItemComponentContainer" {...rest}>
      <Image
        testID="ItemComponentImage"
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
      <Title testID="ItemComponentTitle">{title}</Title>
      <Year testID="ItemComponentYear">{year}</Year>
    </Container>
  );
}
