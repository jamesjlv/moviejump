import faker from "@faker-js/faker";
import { IMovieTrending } from "@/domain/models/movies";
import { HttpStatusCode } from "@/data/protocols/http";
import { UnexpectedError } from "@/domain/errors/enexpected-error";
import { HttpClientSpy } from "@/data/test/mock-http-client";
import { OverloadedError } from "@/domain/errors/server-overloaded";
import { mockMoviePopular } from "@/domain/test/mock-movie-popular";
import { RemoteMovieTrending } from "./remote-movie-trending";
import { mockMovieTrending } from "@/domain/test/mock-movie-trending";

type SutTypes = {
  sut: RemoteMovieTrending;
  httpClientSpy: HttpClientSpy<IMovieTrending[]>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<IMovieTrending[]>();
  const sut = new RemoteMovieTrending(url, httpClientSpy);

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
    const promise = sut.exec();
    expect(promise).rejects.toThrow(new OverloadedError());
  });
  test("Should return an MoviePopularInfo if HttpPostClient returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockMovieTrending();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const account = await sut.exec("movie");
    expect(account).toEqual(httpResult);
  });
});
