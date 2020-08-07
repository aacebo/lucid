import { NextApiRequest, NextApiResponse } from 'next';

import createUser from '../../endpoints/user/create/create-user.endpoint';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await createUser(req, res);
  } else {
    res.status(404).json({ message: 'endpoint not found' });
  }
}
