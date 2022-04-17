import faker from "@faker-js/faker";
import { IMovieGenrer } from "@/domain/models/movies";
import { HttpStatusCode } from "@/data/protocols/http";
import { UnexpectedError } from "@/domain/errors/enexpected-error";
import { mockMovieDescription } from "@/domain/test/mock-movie-description";
import { HttpClientSpy } from "@/data/test/mock-http-client";
import { RemoteMovieGenrer } from "./remote-movie-genrer";
import { mockMovieGenrer } from "@/domain/test/mock-movie-genrer";
import { OverloadedError } from "@/domain/errors/server-overloaded";

type SutTypes = {
  sut: RemoteMovieGenrer;
  httpClientSpy: HttpClientSpy<IMovieGenrer[]>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<IMovieGenrer[]>();
  const sut = new RemoteMovieGenrer(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteMovieGenrer", () => {
  test("Shoul call HttpPostClient with correct Url", async () => {
    const url = "some_url";
    const { sut, httpClientSpy } = makeSut(url);
    await sut.exec("movie");
    expect(httpClientSpy.url).toBe(url);
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
    const httpResult = mockMovieGenrer();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const account = await sut.exec("movie");
    expect(account).toEqual(httpResult);
  });
});
