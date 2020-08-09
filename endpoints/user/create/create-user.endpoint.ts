import { NextApiRequest, NextApiResponse } from 'next';

import classValidOrReject from '../../../middleware/class-valid-or-reject/class-valid-or-reject.util';

import CreateUser from './create-user.dto';

export default classValidOrReject(CreateUser, async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 201;
  res.json(req.body as CreateUser);
});
