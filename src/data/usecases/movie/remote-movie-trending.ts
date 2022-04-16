import { IGetMovieTrending } from "@/domain/usecases/movies/get/remote-get-trending-movie";
import { IMovieTrending } from "@/domain/models/movies";
import { HttpStatusCode, HttpMethod, HttpClient } from "@/data/protocols/http";

export class RemoteMovieTrending implements IGetMovieTrending {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieTrending[]>
  ) {}

  async exec(param?: string): Promise<IMovieTrending[]> {
    const httpResponse = await this.httpGetClient.request({
      url: `${this.url}${!!param ? `?genres=${param}` : ""}`,
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IMovieTrending[];
      default:
        throw new Error("Não conectou na API");
    }
  }
}
