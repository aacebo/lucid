import faker from 'faker';

import { IUser } from '../endpoints/user/user.entity';
import DEV_USER from './dev-user.constant';

export default function userSeeds(count = 10) {
  const seeds: Partial<IUser>[] = [DEV_USER];

  for (let i = 1; i < count; i++) {
    seeds.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.random.word(),
    });
  }

  return seeds;
}
