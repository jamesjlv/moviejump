import { IMovieDescription } from "@/src/domain/models/movies";
import { HttpClientSpy } from "./mock-http-client";

describe("HttpMock", () => {
  test("Should not retun an error if dont pass any url", async () => {
    const httpClientSpy = new HttpClientSpy<IMovieDescription>();
    await httpClientSpy.request();
  });
});
