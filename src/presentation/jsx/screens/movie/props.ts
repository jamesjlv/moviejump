import { IGetMovieDescription } from "@/src/domain/usecases/movies/get";
import { IGetMovieImages } from "@/src/domain/usecases/movies/get/remote-get-images-movie";
import { ModalProps } from "react-native";

export type ModalMovieProps = ModalProps & {
  getMovieImage: IGetMovieImages;
  getMovieInfo: IGetMovieDescription;
};

export type ParamsData = {
  params: {
    slug: string;
    tmdb: number;
  };
};
