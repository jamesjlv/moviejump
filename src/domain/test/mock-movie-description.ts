import faker from "@faker-js/faker";
import { IMovieDescription } from "../models/movies";

export const mockMovieDescription = (): IMovieDescription => ({
  title: faker.random.words(),
  year: faker.datatype.number({ max: 4 }),
  ids: {
    trakt: faker.datatype.number({ max: 4 }),
    slug: faker.random.words(),
    imdb: faker.random.words(),
    tmdb: faker.datatype.number({ max: 4 }),
  },
  tagline: faker.random.words(),
  overview: faker.random.words(),
  released: faker.random.words(),
  runtime: faker.datatype.number({ max: 4 }),
  country: faker.random.words(),
  trailer: faker.random.words(),
  homepage: faker.random.words(),
  status: faker.random.words(),
  rating: faker.datatype.number({ max: 4 }),
  votes: faker.datatype.number({ max: 4 }),
  comment_count: faker.datatype.number({ max: 4 }),
  updated_at: faker.random.words(),
  language: faker.random.words(),
  available_translations: [faker.random.words()],
  genres: [faker.random.words(), faker.random.words(), faker.random.words()],
  certification: faker.random.words(),
});
