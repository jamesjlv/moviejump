import faker from "@faker-js/faker";
import { IMovieImages } from "../models/movies";

export const mockMovieImage = (): IMovieImages => ({
  backdrops: [
    {
      aspect_ratio: faker.datatype.number({ max: 4 }),
      height: faker.datatype.number({ max: 4 }),
      iso_639_1: faker.random.words(),
      file_path: faker.random.words(),
      vote_average: faker.datatype.number({ max: 4 }),
      vote_count: faker.datatype.number({ max: 4 }),
      width: faker.datatype.number({ max: 4 }),
    },
  ],
  id: faker.datatype.number({ max: 4 }),
  logos: [
    {
      aspect_ratio: faker.datatype.number({ max: 4 }),
      height: faker.datatype.number({ max: 4 }),
      iso_639_1: faker.random.words(),
      file_path: faker.random.words(),
      vote_average: faker.datatype.number({ max: 4 }),
      vote_count: faker.datatype.number({ max: 4 }),
      width: faker.datatype.number({ max: 4 }),
    },
  ],
  posters: [
    {
      aspect_ratio: faker.datatype.number({ max: 4 }),
      height: faker.datatype.number({ max: 4 }),
      iso_639_1: faker.random.words(),
      file_path: faker.random.words(),
      vote_average: faker.datatype.number({ max: 4 }),
      vote_count: faker.datatype.number({ max: 4 }),
      width: faker.datatype.number({ max: 4 }),
    },
  ],
});
