import { HttpStatusCode, HttpMethod, HttpClient } from "@/data/protocols/http";
import { IMovieGenrer } from "@/domain/models/movies";
import { IGetMovieGenrer } from "@/domain/usecases/movies/get/remote-get-genres-movie";

export class RemoteMovieGenrer implements IGetMovieGenrer {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieGenrer[]>
  ) {}

  async exec(param?: string): Promise<IMovieGenrer[]> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IMovieGenrer[];
      default:
        throw new Error("Não conectou na API");
    }
  }
}
