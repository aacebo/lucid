import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import mongoose from 'mongoose';

import LoginUser from '../../../endpoints/user/login/login-user.dto';
import IGoogleUser from '../../../endpoints/user/google-user.interface';
import IGoogleUserAccount from '../../../endpoints/user/google-user-account.interface';
import IGoogleUserProfile from '../../../endpoints/user/google-user-profile.interface';
import User, { IUserDocument } from '../../../endpoints/user/user.entity';
 
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
      authorize: async (creds: LoginUser) => {
        let user: IUserDocument;

        try {
          user = await User.findOne({
            email: creds.email,
            password: creds.password,
            removedAt: { $eq: undefined },
          });
        } catch (err) {
          console.error(err);
        }

        if (user) {
          return Promise.resolve({
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            image: user.image,
          });
        } else {
          return Promise.reject(new Error('not authorized'));
        }
      }
    }),
  ],
  callbacks: {
    signIn: async (_guser: IGoogleUser, gaccount: IGoogleUserAccount, profile: IGoogleUserProfile) => {
      if (gaccount.provider === 'google') {
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
      }

      return Promise.resolve(true);
    },
  },
};
 
export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options);
}
