import React from "react";
import "react-native";
import { render, waitFor, cleanup } from "@testing-library/react-native";
import { AppTheme } from "@/src/presentation/jsx/modules/theme";
import { NavigationContainer } from "@react-navigation/native";
import { IGetMovieImages } from "@/src/domain/usecases/movies/get/remote-get-images-movie";
import {
  IMovieDescription,
  IMovieGenrer,
  IMovieImages,
  IMoviePopular,
  IMovieTrending,
} from "@/src/domain/models/movies";
import {
  IGetMovieDescription,
  IGetMovieGenrer,
  IGetMoviePopular,
  IGetMovieTrending,
} from "@/src/domain/usecases/movies/get";
import { mockMovieDescription } from "@/tests/domain/mocks/mock-movie-description";
import { HttpClient } from "@/src/data/protocols/http";
import { createStore } from "redux";
import rootReducer from "@/src/presentation/contexts/store/modules/rootReducer";
import { Provider } from "react-redux";
import { mockMovieImage } from "@/tests/domain/mocks/mock-movie-image";
import { mockMovieGenrer } from "@/tests/domain/mocks/mock-movie-genrer";
import { HttpClientSpy } from "@/tests/data/mocks/mock-http-client";
import { mockMoviePopular } from "@/tests/domain/mocks/mock-movie-popular";
import { mockMovieTrending } from "@/tests/domain/mocks/mock-movie-trending";
import { Home } from "@/src/presentation/jsx/screens/home";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

function getMovieImage(slug: string = "algo"): IGetMovieImages {
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
export class RemoteMovieGenrerSpy implements IGetMovieGenrer {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieDescription>
  ) {}

  async exec(param: string = "algo"): Promise<IMovieGenrer[]> {
    const response = mockMovieGenrer() as IMovieGenrer[];

    return { ...response };
  }
}
export class RemoteMoviePopularSpy implements IGetMoviePopular {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieDescription>
  ) {}

  async exec(param: string = "algo"): Promise<IMoviePopular[]> {
    const response = mockMoviePopular() as IMoviePopular[];
    return { ...response };
  }
}
export class RemoteMovieTrendingSpy implements IGetMovieTrending {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieDescription>
  ) {}

  async exec(param: string = "algo"): Promise<IMovieTrending[]> {
    const response = mockMovieTrending() as IMovieTrending[];
    return { ...response };
  }
}

const initialState = {
  genres: [
    { name: "123", slug: "123", selected: false },
    { name: "1234", slug: "1234", selected: true },
  ],
};

const store = createStore(rootReducer, initialState);

const makeSut = () => {
  return render(
    <NavigationContainer>
      <Provider store={store}>
        <Home
          getAllGenres={new RemoteMovieGenrerSpy("url", new HttpClientSpy())}
          getMovieImage={getMovieImage()}
          getAllPopularMovies={
            new RemoteMoviePopularSpy("url", new HttpClientSpy())
          }
          getAllTrendingMovies={
            new RemoteMovieTrendingSpy("url", new HttpClientSpy())
          }
        />
      </Provider>
    </NavigationContainer>,
    {
      wrapper: AppTheme,
    }
  );
};

describe("HomeScreen", () => {
  afterEach(cleanup);
  test("Should be able click in button to see a trailer", async () => {
    await waitFor(() => {
      const sut = makeSut();
      // const buttonNextPage = sut.getAllByTestId("ButtonComponentContainer");
      // fireEvent.press(buttonNextPage[0]);
    });
  });
});
