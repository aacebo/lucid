import { NextApiRequest, NextApiResponse } from 'next';

import ICreateUser from '../../dtos/user/create-user.interface';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 201;
  res.json(req.body as ICreateUser);
}
