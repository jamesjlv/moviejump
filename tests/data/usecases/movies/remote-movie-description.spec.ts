import faker from "@faker-js/faker";
import { HttpStatusCode } from "@/src/data/protocols/http";
import { UnexpectedError } from "@/src/domain/errors/enexpected-error";
import { mockMovieDescription } from "@/tests/domain/mocks/mock-movie-description";
import { OverloadedError } from "@/src/domain/errors/server-overloaded";
import { RemoteMovieDescription } from "@/src/data/usecases/movie/remote-movie-description";
import { HttpClientSpy } from "../../mocks/mock-http-client";
import { IMovieDescription } from "@/src/domain/models/movies";

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
