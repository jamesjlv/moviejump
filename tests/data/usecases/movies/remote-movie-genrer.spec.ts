import faker from "@faker-js/faker";
import { IMovieGenrer } from "@/src/domain/models/movies";
import { HttpStatusCode } from "@/src/data/protocols/http";
import { UnexpectedError } from "@/src/domain/errors/enexpected-error";
import { OverloadedError } from "@/src/domain/errors/server-overloaded";
import { mockMovieGenrer } from "@/tests/domain/mocks/mock-movie-genrer";
import { RemoteMovieGenrer } from "@/src/data/usecases/movie/remote-movie-genrer";
import { HttpClientSpy } from "../../mocks/mock-http-client";

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
