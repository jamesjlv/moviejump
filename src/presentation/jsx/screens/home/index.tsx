import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
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
import { GenresRedux } from "@/presentation/contexts/store/modules/genres/props";

export function Home({
  getAllPopularMovies,
  getAllTrendingMovies,
  getAllGenres,
  getMovieImage,
}: HomeProps) {
  const dispatch = useDispatch();
  //@ts-ignore
  const genres = useSelector((state) => state?.genres?.genrer) as GenresRedux[];
  const [isLoading, setIsLoading] = useState(true);
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [popularMovies, setPopularMovies] = useState<PopularProps[]>();
  const [trendingMovies, setTrandingMovies] = useState<TrendingProps[]>();
  const [selectedGenres, setSelectedGenres] = useState<string>();

  async function handleGetMovies() {
    setIsLoading(true);
    try {
      setPopularMovies(
        await Promise.all(
          (
            await getAllPopularMovies.exec(selectedGenres)
          ).map(async (movie) => {
            const imagePath = await handleSearchPosterOfMovies(movie.ids.tmdb);
            return {
              ...movie,
              imagePath,
            };
          })
        )
      );
      setTrandingMovies(
        await Promise.all(
          (
            await getAllTrendingMovies.exec(selectedGenres)
          ).map(async (movie) => {
            let imagePath = await handleSearchPosterOfMovies(
              movie.movie.ids.tmdb
            );
            return {
              ...movie,
              imagePath,
            };
          })
        )
      );
    } catch (error) {
      setIsLoading(false);
    }

    setIsLoading(false);
  }

  async function handleGetGenres() {
    let genres;

    try {
      genres = await getAllGenres.exec();
    } catch (error) {}

    dispatch(
      handleAddGenrer(
        genres?.map((genre) => ({
          ...genre,
          selected: false,
        })) as unknown as GenresRedux[]
      )
    );
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
    let filtersGenrer: GenresRedux[] = [];
    //@ts-ignore
    genres?.map((genre) => genre?.selected && filtersGenrer.push(genre?.slug));
    setSelectedGenres(filtersGenrer?.join(","));
  }, [genres, dispatch]);

  useEffect(() => {
    handleGetMovies();
  }, [selectedGenres]);

  useEffect(() => {
    if (!genres) {
      handleGetGenres();
    }
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Title>Movies</Title>
      <OptionsWrapper>
        {genres &&
          genres.map((genre: GenresRedux) => (
            <Option
              key={genre.slug}
              slug={genre.slug}
              label={genre.name}
              selected={genre.selected}
            />
          ))}
      </OptionsWrapper>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator size="small" color="gray" />
          <SubTitle style={{ fontSize: 12, fontWeight: "400" }}>
            Carregando...
          </SubTitle>
        </LoadingContainer>
      ) : (
        <>
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
