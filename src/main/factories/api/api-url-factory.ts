import { APIsConfig } from "@/src/infra/config/api";
const { trakt, tmdb } = APIsConfig;

export const manufactureApiUrl = (path: string): string =>
  `${trakt.baseUrl}/${path}`;
export const manufactureApiUrlImages = (path: string): string =>
  `${tmdb.baseUrl}/${tmdb.release}/${path}/`;
