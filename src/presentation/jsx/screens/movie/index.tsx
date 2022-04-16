import { IMovieDescription } from "@/domain/models/movies";
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

export function Movie({
  getMovieImage,
  getMovieInfo,
  ...rest
}: ModalMovieProps) {
  const { params: ParamsRoute } = useRoute();
  const { params } = ParamsRoute as unknown as ParamsData;
  const [movieImage, setMovieImage] = useState<string>();
  const [movieDescription, setMovieDescription] = useState<IMovieDescription>();

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
  async function handleMovieDescription() {
    let movieDesc: IMovieDescription;
    try {
      movieDesc = await getMovieInfo.exec(params.slug);
      setMovieDescription(movieDesc);
    } catch (error) {}
  }

  useEffect(() => {
    handleSearchImage();
    handleMovieDescription();
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
            <TimeText>{movieDescription?.runtime} min</TimeText>
          </Time>
          <Likes>
            <IconLike />
            <LikeText>{movieDescription?.votes}</LikeText>
          </Likes>
          <Stars>
            <IconStar />
            <IconText>
              {movieDescription?.rating.toString().slice(0, 3)}
            </IconText>
          </Stars>
        </ShortInfoWrapper>

        <MovieName>{movieDescription?.title}</MovieName>
        <MovieYear>{movieDescription?.year}</MovieYear>
        <DescriptonWrapper>
          <DescriptonTitle>Description</DescriptonTitle>
          <DescriptonText>{movieDescription?.overview}</DescriptonText>
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
