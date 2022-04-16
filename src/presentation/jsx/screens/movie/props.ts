import { IGetMovieImages } from "@/domain/usecases/movies/get/remote-get-images-movie";
import { ModalProps } from "react-native";

export type ModalMovieProps = ModalProps & {
  getMovieImage: IGetMovieImages;
};

export type ParamsData = {
  params: {
    slug: string;
    tmdb: number;
  };
};