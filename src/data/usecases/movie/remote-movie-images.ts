import { HttpStatusCode, HttpMethod, HttpClient } from "@/data/protocols/http";
import { IMovieImages } from "@/domain/models/movies";
import { IGetMovieImages } from "@/domain/usecases/movies/get/remote-get-images-movie";

export class RemoteMovieImages implements IGetMovieImages {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieImages>
  ) {}

  async exec(param?: string): Promise<IMovieImages> {
    const httpResponse = await this.httpGetClient.request({
      url:
        this.url +
        param +
        "/images?api_key=2a4e0da945fc9c81654c76fe878e78d6&language=en",
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IMovieImages;
      default:
        throw new Error("Não conectou na API");
    }
  }
}
