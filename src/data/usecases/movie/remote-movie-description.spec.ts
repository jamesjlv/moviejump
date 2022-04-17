import faker from "@faker-js/faker";
import { IMovieDescription } from "../../../domain/models/movies/index";
import { RemoteMovieDescription } from "./remote-movie-description";
import { HttpStatusCode } from "@/data/protocols/http";
import { UnexpectedError } from "@/domain/errors/enexpected-error";
import { mockMovieDescription } from "@/domain/test/mock-movie-description";
import { HttpClientSpy } from "@/data/test/mock-http-client";
import { OverloadedError } from "@/domain/errors/server-overloaded";

type SutTypes = {
  sut: RemoteMovieDescription;
  httpClientSpy: HttpClientSpy<IMovieDescription>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<IMovieDescription>();
  const sut = new RemoteMovieDescription(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteMovieDescriptio", () => {
  test("Shoul call HttpPostClient with correct Url", async () => {
    const url = "some_url";
    const { sut, httpClientSpy } = makeSut(url);
    await sut.exec("movie");
    expect(httpClientSpy.url).toBe(url + "movie" + "?extended=full");
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
  test("Should return an MovieDescription if HttpPostClient returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockMovieDescription();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const account = await sut.exec("movie");
    expect(account).toEqual(httpResult);
  });
});
