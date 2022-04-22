/* eslint-disable class-methods-use-this */
import axios, { AxiosResponse } from "axios";
import {
  HttpRequest,
  HttpResponse,
  HttpClient,
} from "@/src/data/protocols/http";
import Config from "react-native-config";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse;

    axios.defaults.headers.common["trakt-api-version"] = "2";
    axios.defaults.headers.common["trakt-api-key"] = Config.CLIENT_ID;

    try {
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
