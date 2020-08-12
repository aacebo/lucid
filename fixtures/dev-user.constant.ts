import mongoose from 'mongoose';

import { IUser } from '../endpoints/user/user.entity';

const DEV_USER: Partial<IUser> = {
  _id: mongoose.Types.ObjectId.createFromHexString('000000013efe40642a17a496'),
  firstName: 'dev',
  lastName: 'user',
  email: 'dev-user@test.com',
  password: 'testing123',
};

export default DEV_USER;
