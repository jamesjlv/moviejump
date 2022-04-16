import { IMovieGenrer } from "@/domain/models/movies";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { Option } from "../../components/actions/touchables/option";
import { Card } from "../../components/card";
import { HomeProps, PopularProps, TrendingProps } from "./props";
import {
  Container,
  OptionsWrapper,
  SearchButton,
  Title,
  Content,
  CardsWrapper,
  SubTitle,
} from "./styles";

export function Home({
  getAllPopularMovies,
  getAllTrendingMovies,
  getAllGenres,
  getMovieImage,
}: HomeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [genres, setGenres] = useState<IMovieGenrer[]>();
  const [popularMovies, setPopularMovies] = useState<PopularProps[]>();
  const [trendingMovies, setTrandingMovies] = useState<TrendingProps[]>();

  async function handleGetMovies() {
    let popular;
    let trending;

    try {
      popular = await getAllPopularMovies.exec();
      popular = await Promise.all(
        popular.map(async (movie) => {
          const imagePath = await handleSearchPosterOfMovies(movie.ids.tmdb);
          return {
            ...movie,
            imagePath,
          };
        })
      );

      trending = await getAllTrendingMovies.exec();
      trending = await Promise.all(
        trending.map(async (movie) => {
          let imagePath = await handleSearchPosterOfMovies(
            movie.movie.ids.tmdb
          );
          return {
            ...movie,
            imagePath,
          };
        })
      );
      setGenres(await getAllGenres.exec());
    } catch (error) {
      setIsLoading(false);
    }
    setPopularMovies(popular as unknown as PopularProps[]);
    setTrandingMovies(trending as unknown as TrendingProps[]);
    setIsLoading(false);
  }

  async function handleSearchPosterOfMovies(tmdb: number) {
    const path = await getMovieImage.exec(String(tmdb));

    return `https://image.tmdb.org/t/p/original${path.posters[0].file_path}`;
  }

  async function handleGoToMovieDescription(slug: string, tmdb: number) {
    navigate("Movie", {
      params: {
        slug,
        tmdb,
      },
    });
  }

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SearchButton />
      <Title>Movies</Title>
      {isLoading && <ActivityIndicator size={24} color="black" />}

      <OptionsWrapper>
        {genres &&
          genres?.map((genre) => (
            <Option key={genre.slug} label={genre.name} />
          ))}
      </OptionsWrapper>
      <Content>
        <CardsWrapper>
          {popularMovies &&
            popularMovies?.map((movie) => (
              <Card
                key={"popularMovieCard" + movie.ids.slug}
                title={movie.title}
                year={movie.year}
                imageUrl={movie?.imagePath}
                onPress={() =>
                  handleGoToMovieDescription(movie.ids.slug, movie.ids.tmdb)
                }
              />
            ))}
        </CardsWrapper>
        <SubTitle>Trending</SubTitle>
        <CardsWrapper>
          {trendingMovies &&
            trendingMovies?.map((movie) => (
              <Card
                key={"popularMovieCard" + movie.movie.ids.slug}
                title={movie.movie.title}
                year={movie.movie.year}
                imageUrl={movie?.imagePath}
                onPress={() =>
                  handleGoToMovieDescription(
                    movie.movie.ids.slug,
                    movie.movie.ids.tmdb
                  )
                }
              />
            ))}
        </CardsWrapper>
      </Content>
    </Container>
  );
}
