import { NextApiRequest, NextApiResponse } from 'next';

import classValidOrReject from '../../../middleware/class-valid-or-reject/class-valid-or-reject.middleware';
import Logger from '../../../helpers/logger/logger.helper';
import User from '../user.entity';

import CreateUser from './create-user.dto';

export default classValidOrReject(CreateUser, async (req: NextApiRequest, res: NextApiResponse) => {
  const exists = await User.findOne({ email: req.body.email });

  if (exists) {
    res.status(409).json({ message: 'email already exists' });
  }

  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    Logger.error(err.toString());
  }
});
