import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ModalMovieProps, ParamsData } from "./props";

import {
  Container,
  Content,
  Text,
  Header,
  Image,
  MovieDetails,
  ShortInfoWrapper,
  Time,
  IconTime,
  TimeText,
  Likes,
  IconLike,
  LikeText,
  Stars,
  IconStar,
  IconText,
  MovieName,
  MovieYear,
  DescriptonWrapper,
  DescriptonText,
  DescriptonTitle,
  WhoComment,
} from "./styles";

export function Movie({ getMovieImage, ...rest }: ModalMovieProps) {
  const { params: ParamsRoute } = useRoute();
  const { params } = ParamsRoute as unknown as ParamsData;
  const [movieImage, setMovieImage] = useState<string>();

  async function handleSearchImage() {
    if (params?.tmdb) {
      const imageData = await getMovieImage.exec(String(params?.tmdb));
      const randomImage =
        imageData.backdrops[
          Math.floor(Math.random() * imageData.backdrops.length)
        ];
      setMovieImage(
        "https://image.tmdb.org/t/p/original" + randomImage.file_path
      );
    }
  }
  useEffect(() => {
    handleSearchImage();
  }, [params]);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={{
          uri: movieImage,
        }}
      />
      <Header />
      <MovieDetails>
        <ShortInfoWrapper>
          <Time>
            <IconTime />
            <TimeText>135 min</TimeText>
          </Time>
          <Likes>
            <IconLike />
            <LikeText>958</LikeText>
          </Likes>
          <Stars>
            <IconStar />
            <IconText>10k</IconText>
          </Stars>
        </ShortInfoWrapper>

        <MovieName>Doctor Strange - Multiverse of Madness</MovieName>
        <MovieYear>2022</MovieYear>
        <DescriptonWrapper>
          <DescriptonTitle>Description</DescriptonTitle>
          <DescriptonText>
            Dr. Stephen Strange casts a forbidden spell that opens the doorway
            to the multiverse, including alternate versions of himself, whose
            threat to humanity is too great for the combined forces of Strange,
            Wong, and Wanda Maximoff.
          </DescriptonText>
        </DescriptonWrapper>
        <DescriptonWrapper>
          <DescriptonTitle>Comments</DescriptonTitle>
          <DescriptonText>Great Movie!</DescriptonText>
          <WhoComment>Sean Rudford - 05/2000</WhoComment>
          <DescriptonText>I'm excited to see this movie!</DescriptonText>
          <WhoComment>James Leal - 05/2000</WhoComment>
        </DescriptonWrapper>
      </MovieDetails>
    </Container>
  );
}
