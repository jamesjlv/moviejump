import {
  HttpStatusCode,
  HttpMethod,
  HttpClient,
} from "@/src/data/protocols/http";
import { UnexpectedError } from "@/src/domain/errors/enexpected-error";
import { OverloadedError } from "@/src/domain/errors/server-overloaded";
import { IMovieDescription } from "@/src/domain/models/movies";
import { IGetMovieDescription } from "@/src/domain/usecases/movies/get";

export class RemoteMovieDescription implements IGetMovieDescription {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpClient<IMovieDescription>
  ) {}

  async exec(param: string): Promise<IMovieDescription> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url + param + "?extended=full",
      method: HttpMethod.Get,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body as IMovieDescription;
      case HttpStatusCode.serverOverload:
        throw new OverloadedError();
      default:
        throw new UnexpectedError();
    }
  }
}
