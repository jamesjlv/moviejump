import React from "react";
import "react-native";
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react-native";
import { AppTheme } from "@/src/presentation/jsx/modules/theme";
import { NavigationContainer } from "@react-navigation/native";
import { Movie } from "@/src/presentation/jsx/screens/movie";
import { IGetMovieImages } from "@/src/domain/usecases/movies/get/remote-get-images-movie";
import { IMovieDescription, IMovieImages } from "@/src/domain/models/movies";
import { IGetMovieDescription } from "@/src/domain/usecases/movies/get";
import { mockMovieDescription } from "@/tests/domain/mocks/mock-movie-description";
import { HttpClient } from "@/src/data/protocols/http";
import { mockMovieImage } from "@/tests/domain/mocks/mock-movie-image";
import { HttpClientSpy } from "@/tests/data/mocks/mock-http-client";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        params: {
          slug: "tron-legacy-2010",
          tmdb: 20526,
        },
      },
    }),
  };
});

function getMovieImage(slug: string = "algo"): Promise<IGetMovieImages> {
  async function exec(param: string = "algo"): Promise<IMovieImages> {
    const data = mockMovieImage();
    return {
      ...data,
    };
  }
  return {
    //@ts-ignore
    exec,
  };
}

export class RemoteMovieDescriptionSpy implements IGetMovieDescription {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieDescription>
  ) {}

  async exec(param: string = "algo"): Promise<IMovieDescription> {
    const response = mockMovieDescription() as IMovieDescription;
    return { ...response };
  }
}

const makeSut = () => {
  return render(
    <NavigationContainer>
      <Movie
        //@ts-ignore
        getMovieImage={getMovieImage()}
        getMovieInfo={new RemoteMovieDescriptionSpy("url", new HttpClientSpy())}
      />
    </NavigationContainer>,
    {
      wrapper: AppTheme,
    }
  );
};

describe("MovieFilme", () => {
  afterEach(cleanup);
  test("Should be able click in button to see a trailer", async () => {
    await waitFor(() => {
      const sut = makeSut();
      const buttonNextPage = sut.getAllByTestId("ButtonComponentContainer");
      fireEvent.press(buttonNextPage[0]);
    });
  });
});
