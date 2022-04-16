import { IMovieDescription } from "@/domain/models/movies";
import { useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Linking, StatusBar } from "react-native";
import { ButtonComponent } from "../../components/actions/touchables/button";
import { ModalMovieProps, ParamsData } from "./props";

import {
  Container,
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
  LabelDescription,
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
          <DescriptonTitle>Info +</DescriptonTitle>
          <DescriptonText>
            {movieDescription?.genres.map((genre) => genre + " ")}
          </DescriptonText>
          <LabelDescription>Genres</LabelDescription>
          <DescriptonText>{movieDescription?.released}</DescriptonText>
          <LabelDescription>Release date</LabelDescription>
          <ButtonComponent
            description="Watch the trailer"
            onPress={() => Linking.openURL(movieDescription?.trailer!)}
            style={{ borderRadius: 10, marginBottom: 42 }}
          />
        </DescriptonWrapper>
      </MovieDetails>
    </Container>
  );
}
