import faker from "@faker-js/faker";
import { IMoviePopular } from "../models/movies";

export const mockMoviePopular = (): IMoviePopular[] => [
  {
    title: faker.random.words(),
    year: faker.datatype.number({ max: 4 }),
    ids: {
      trakt: faker.datatype.number({ max: 4 }),
      slug: faker.random.words(),
      imdb: faker.random.words(),
      tmdb: faker.datatype.number({ max: 4 }),
    },
  },
];
