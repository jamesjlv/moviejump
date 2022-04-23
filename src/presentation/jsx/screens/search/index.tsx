import React, { useEffect, useState } from "react";
import {
  NavigationProp,
  ParamListBase,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import { Container, Movies, LoadingContainer, SubTitle } from "./styles";
import { MovieProps, RouteProps, SearchScreenProps } from "./props";
import { Item } from "../../components/item";
import { Header } from "../../components/header";
import { ActivityIndicator } from "react-native";

export function SearchScreen({
  getMoviesFiltered,
  getMovieImage,
}: SearchScreenProps) {
  const { params } = useRoute();
  const {
    params: { filter },
  } = params as RouteProps;
  const [movies, setMovies] = useState<MovieProps[]>();
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  async function handleSearchMovies() {
    let moviesFinded = await Promise.all(
      (
        await getMoviesFiltered.exec(filter)
      ).map(async (movie) => {
        const path = await handleSearchPosterOfMovies(movie.movie.ids.tmdb);
        return {
          ...movie,
          imagePath: path,
        };
      })
    );
    setMovies(moviesFinded as MovieProps[]);
    setIsLoading(false);
  }

  async function handleSearchPosterOfMovies(tmdb: number) {
    try {
      const path = await getMovieImage.exec(`${tmdb}`);
      return `https://image.tmdb.org/t/p/original${
        path?.posters[0]?.file_path
          ? path?.posters[Math.floor(Math.random() * path.posters.length)]
              ?.file_path
          : path?.backdrops[0]?.file_path
          ? path?.backdrops[Math.floor(Math.random() * path.backdrops.length)]
              ?.file_path
          : path?.logos[0]?.file_path
          ? path?.logos[Math.floor(Math.random() * path.logos.length)]
              ?.file_path
          : `https://dummyimage.com/500x800/9c9c9c/ffffff.jpg&text=Poster+Not+Found`
      }`;
    } catch (error) {
      return `https://dummyimage.com/500x800/9c9c9c/ffffff.jpg&text=Poster+Not+Found`;
    }
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
    handleSearchMovies();
  }, [filter]);

  return (
    <Container>
      <Header title={filter} />
      <Movies>
        {isLoading ? (
          <LoadingContainer>
            <ActivityIndicator size="small" color="gray" />
            <SubTitle style={{ fontSize: 12, fontWeight: "400" }}>
              Loading...
            </SubTitle>
          </LoadingContainer>
        ) : (
          movies?.map((movie) => (
            <Item
              key={movie.movie.ids.slug}
              title={movie.movie.title}
              imageUrl={movie.imagePath}
              year={movie.movie.year}
              onPress={() =>
                handleGoToMovieDescription(
                  movie.movie.ids.slug,
                  movie.movie.ids.tmdb
                )
              }
            />
          ))
        )}
      </Movies>
    </Container>
  );
}
