import { NextApiRequest, NextApiResponse } from 'next';

import User from '../../../endpoints/user/user.entity';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const users = await User.find({ });
  res.json(users);
}
