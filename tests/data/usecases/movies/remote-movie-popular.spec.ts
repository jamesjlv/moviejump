import faker from "@faker-js/faker";
import { IMoviePopular } from "@/src/domain/models/movies";
import { HttpStatusCode } from "@/src/data/protocols/http";
import { UnexpectedError } from "@/src/domain/errors/enexpected-error";
import { OverloadedError } from "@/src/domain/errors/server-overloaded";
import { mockMoviePopular } from "@/tests/domain/mocks/mock-movie-popular";
import { RemoteMoviePopular } from "@/src/data/usecases/movie/remote-movie-popular";
import { HttpClientSpy } from "../../mocks/mock-http-client";

type SutTypes = {
  sut: RemoteMoviePopular;
  httpClientSpy: HttpClientSpy<IMoviePopular[]>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<IMoviePopular[]>();
  const sut = new RemoteMoviePopular(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteMoviePopular", () => {
  test("Shoul call HttpPostClient with correct Url", async () => {
    const url = `some_url`;
    const { sut, httpClientSpy } = makeSut(url);
    await sut.exec();
    expect(httpClientSpy.url).toBe(url);
  });
  test("Shoul call HttpPostClient with correct Url and Genres", async () => {
    const url = `some_url`;
    const { sut, httpClientSpy } = makeSut(url);
    await sut.exec("comedy");
    expect(httpClientSpy.url).toBe(url + "?genres=comedy");
  });
  test("Should throw an error if httpClient returns 401", () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.exec("movie");
    expect(promise).rejects.toThrow(new UnexpectedError());
  });
  test("Should throw an message error if httpClient returns 503", () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverOverload,
    };
    const promise = sut.exec("movie");
    expect(promise).rejects.toThrow(new OverloadedError());
  });
  test("Should return an MoviePopularInfo if HttpPostClient returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockMoviePopular();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const account = await sut.exec("movie");
    expect(account).toEqual(httpResult);
  });
});
