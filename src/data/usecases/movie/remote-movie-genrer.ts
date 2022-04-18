import {
  HttpStatusCode,
  HttpMethod,
  HttpClient,
} from "@/src/data/protocols/http";
import { UnexpectedError } from "@/src/domain/errors/enexpected-error";
import { OverloadedError } from "@/src/domain/errors/server-overloaded";
import { IMovieGenrer } from "@/src/domain/models/movies";
import { IGetMovieGenrer } from "@/src/domain/usecases/movies/get/remote-get-genres-movie";

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
      case HttpStatusCode.serverOverload:
        throw new OverloadedError();
      default:
        throw new UnexpectedError();
    }
  }
}
