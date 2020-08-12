import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import mongoose from 'mongoose';

import CreateUser from '../../../endpoints/user/create/create-user.dto';
import IGoogleUser from '../../../endpoints/user/google-user.interface';
import IGoogleUserAccount from '../../../endpoints/user/google-user-account.interface';
import IGoogleUserProfile from '../../../endpoints/user/google-user-profile.interface';
import User from '../../../endpoints/user/user.entity';
 
const options = {
  secret: process.env.JWT_SECRET,
  jwt: { secret: process.env.JWT_SECRET },
  session: { jwt: true },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Providers.Credentials({
      id: 'local',
      authorize: async (creds: CreateUser) => {
        console.log(creds);
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' };
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        } else {
          // If you return null or false then the credentials will be rejected
          return Promise.resolve(null);
          // You can also Reject this callback with an Error or with a URL:
          // return Promise.reject(new Error('error message')) // Redirect to error page
          // return Promise.reject('/path/to/redirect')        // Redirect to a URL
        }
      }
    }),
  ],
  callbacks: {
    signIn: async (_guser: IGoogleUser, gaccount: IGoogleUserAccount, profile: IGoogleUserProfile) => {
      try {
        const user = await User.findOne({ email: profile.email });
  
        await User.updateOne({ _id: user?._id || mongoose.Types.ObjectId() }, {
          email: profile.email,
          firstName: profile.given_name,
          lastName: profile.family_name,
          image: profile.picture,
          provider: gaccount.provider as any,
        }, { upsert: true });
      } catch (err) {
        console.error(err);
      }

      return Promise.resolve(true);
    },
  },
};
 
export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options);
}
