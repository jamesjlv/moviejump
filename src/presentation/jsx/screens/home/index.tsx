import { IMovieGenrer } from "@/domain/models/movies";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { Option } from "../../components/actions/touchables/option";
import { Card } from "../../components/card";
import { HomeProps, PopularProps, TrendingProps } from "./props";
import {
  Container,
  OptionsWrapper,
  Title,
  Content,
  CardsWrapper,
  SubTitle,
  LoadingContainer,
} from "./styles";
import { handleAddGenrer } from "@/presentation/contexts/store/modules/genres/actions";

export function Home({
  getAllPopularMovies,
  getAllTrendingMovies,
  getAllGenres,
  getMovieImage,
}: HomeProps) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [genres, setGenres] = useState<IMovieGenrer[]>();
  const [popularMovies, setPopularMovies] = useState<PopularProps[]>();
  const [trendingMovies, setTrandingMovies] = useState<TrendingProps[]>();
  const [selectedGenres, setSelectedGenres] = useState<string>();

  async function handleGetMovies() {
    setIsLoading(true);
    let popular;
    let trending;
    let genres;

    try {
      popular = await getAllPopularMovies.exec(selectedGenres);
      popular = await Promise.all(
        popular.map(async (movie) => {
          const imagePath = await handleSearchPosterOfMovies(movie.ids.tmdb);
          return {
            ...movie,
            imagePath,
          };
        })
      );

      trending = await getAllTrendingMovies.exec(selectedGenres);
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

      genres = await getAllGenres.exec();
    } catch (error) {
      setIsLoading(false);
    }
    setGenres(genres as unknown as IMovieGenrer[]);
    setPopularMovies(popular as unknown as PopularProps[]);
    setTrandingMovies(trending as unknown as TrendingProps[]);
    dispatch(handleAddGenrer(genres as unknown as IMovieGenrer[]));
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
  }, [selectedGenres]);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Title>Movies</Title>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator size={24} color="black" />
          <SubTitle style={{ fontSize: 12, fontWeight: "400" }}>
            Carregando...
          </SubTitle>
        </LoadingContainer>
      ) : (
        <>
          <OptionsWrapper>
            {genres &&
              genres?.map((genre) => (
                <Option
                  key={genre.slug}
                  slug={genre.slug}
                  label={genre.name}
                  executeWithOnPress={setSelectedGenres}
                  gendersSelecteds={selectedGenres}
                />
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
        </>
      )}
    </Container>
  );
}
