import { IGetMoviePopular } from "@/domain/usecases/movies/get";
import { IMoviePopular } from "@/domain/models/movies";
import { HttpStatusCode, HttpMethod, HttpClient } from "@/data/protocols/http";

export class RemoteMoviePopular implements IGetMoviePopular {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMoviePopular[]>
  ) {}

  async exec(param?: string): Promise<IMoviePopular[]> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IMoviePopular[];
      default:
        throw new Error("Não conectou na API");
    }
  }
}
