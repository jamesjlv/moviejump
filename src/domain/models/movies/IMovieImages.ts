export interface IMovieImages {
  backdrops: ImageProps[];
  id: number;
  logos: ImageProps[];
  posters: ImageProps[];
}

export type ImageProps = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};
