import { HttpClientSpy } from "@/data/test/mock-http-client";
import { IMovieDescription } from "@/domain/models/movies";

describe("HttpMock", () => {
  test("Should not retun an error if dont pass any url", async () => {
    const httpClientSpy = new HttpClientSpy<IMovieDescription>();
    await httpClientSpy.request();
  });
});
