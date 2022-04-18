import faker from "@faker-js/faker";

import { IMovieGenrer } from "@/src/domain/models/movies";

export const mockMovieGenrer = (): IMovieGenrer[] => [
  {
    name: faker.random.words(),
    slug: faker.random.words(),
  },
  {
    name: faker.random.words(),
    slug: faker.random.words(),
  },
  {
    name: faker.random.words(),
    slug: faker.random.words(),
  },
];
