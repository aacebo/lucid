import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
 
const options = {
  secret: process.env.JWT_SECRET,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
};
 
export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options);
}
