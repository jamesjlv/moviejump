import faker from "@faker-js/faker";
import { IMovieTrending } from "@/src/domain/models/movies";

export const mockMovieTrending = (): IMovieTrending[] => [
  {
    watchers: faker.datatype.number({ max: 4 }),
    movie: {
      title: faker.random.words(),
      year: faker.datatype.number({ max: 4 }),
      ids: {
        trakt: faker.datatype.number({ max: 4 }),
        slug: faker.random.words(),
        imdb: faker.random.words(),
        tmdb: faker.datatype.number({ max: 4 }),
      },
    },
  },
];
