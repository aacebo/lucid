import { NextApiRequest, NextApiResponse } from 'next';

import classValidOrReject from '../../../utils/class-valid-or-reject/class-valid-or-reject.util';

import CreateUser from './create-user.dto';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await classValidOrReject(req, res, CreateUser);

  res.statusCode = 201;
  res.json(req.body as CreateUser);
}
