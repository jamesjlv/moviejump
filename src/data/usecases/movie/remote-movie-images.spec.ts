import faker from "@faker-js/faker";
import { IMovieImages } from "@/domain/models/movies";
import { HttpStatusCode } from "@/data/protocols/http";
import { UnexpectedError } from "@/domain/errors/enexpected-error";
import { HttpClientSpy } from "@/data/test/mock-http-client";

import { OverloadedError } from "@/domain/errors/server-overloaded";
import { RemoteMovieImages } from "./remote-movie-images";
import { mockMovieImage } from "@/domain/test/mock-movie-image";

type SutTypes = {
  sut: RemoteMovieImages;
  httpClientSpy: HttpClientSpy<IMovieImages>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<IMovieImages>();
  const sut = new RemoteMovieImages(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteMovieImage", () => {
  test("Shoul call HttpPostClient with correct Url", async () => {
    const url = `some_url`;
    const { sut, httpClientSpy } = makeSut(url);
    await sut.exec("movie");
    expect(httpClientSpy.url).toBe(
      url + `movie/images?api_key=2a4e0da945fc9c81654c76fe878e78d6&language=en`
    );
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
  test("Should return an MovieGenrer if HttpPostClient returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockMovieImage();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const account = await sut.exec("movie");
    expect(account).toEqual(httpResult);
  });
});
