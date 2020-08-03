import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);
  res.statusCode = 201;
  res.json({ name: 'John Doe' });
}
