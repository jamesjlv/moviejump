/* eslint-disable class-methods-use-this */
import axios, { AxiosResponse } from "axios";
import {
  HttpRequest,
  HttpResponse,
  HttpClient,
} from "@/src/data/protocols/http";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse;

    try {
      axios.defaults.headers.common["trakt-api-version"] = "2";
      axios.defaults.headers.common["trakt-api-key"] =
        "3605af69cf6cd0885cda969c37b77db7b0a3227e5f417013026db56a285d0129";
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch ({ message }) {
      axiosResponse = message as unknown as AxiosResponse<string>;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
