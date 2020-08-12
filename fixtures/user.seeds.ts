import faker from 'faker';

import { IUserDocument } from '../endpoints/user/user.entity';
import DEV_USER from './dev-user.constant';

export default function userSeeds(count = 10) {
  const seeds: Partial<IUserDocument>[] = [DEV_USER];

  for (let i = 1; i < count; i++) {
    seeds.push({
    });
  }

  return seeds;
}
