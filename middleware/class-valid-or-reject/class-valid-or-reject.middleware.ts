import { NextApiResponse, NextApiRequest } from 'next';
import { validateOrReject } from 'class-validator';

export default function classValidOrReject<V, T extends Constructor<V>>(Class: T, next: (req: NextApiRequest, res: NextApiResponse) => void) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await validateOrReject(new Class(req.body));
      return next(req, res);
    } catch (_err) {
      res.statusCode = 400;
      res.json({ message: 'bad request' });
    }
  };
}
