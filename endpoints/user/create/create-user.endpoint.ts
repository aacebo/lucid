import { NextApiRequest, NextApiResponse } from 'next';

import CreateUser from './create-user.dto';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 201;
  res.json(req.body as CreateUser);
}
