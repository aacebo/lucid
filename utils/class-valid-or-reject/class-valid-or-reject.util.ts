import { NextApiResponse, NextApiRequest } from 'next';
import { validateOrReject } from 'class-validator';

export default async function classValidOrReject<V, T extends Constructor<V>>(req: NextApiRequest, res: NextApiResponse, Class: T) {
  try {
    await validateOrReject(new Class(req.body));
  } catch (_err) {
    res.statusCode = 400;
    res.json({ message: 'bad request' });
  }
}