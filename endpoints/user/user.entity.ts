import mongoose from 'mongoose';
import md5 from 'md5';

import capitalize from '../../utils/capitalize/capitalize.util';

import UserProvider from './user-provider.enum';

export interface IUser {
  readonly _id: string | mongoose.Types.ObjectId;
  provider?: UserProvider;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  password?: string;
  removedAt?: Date;
}

export interface IUserDocument extends IUser, mongoose.Document {
  readonly _id: string | mongoose.Types.ObjectId;
}

const User: mongoose.Model<IUserDocument> = mongoose.models.User || mongoose.model<IUserDocument>('User', new mongoose.Schema<IUserDocument>({
  email: { type: String, unique: true, required: true },
  provider: { type: UserProvider },
  firstName: { type: String, required: true, set: capitalize },
  lastName: { type: String, required: true , set: capitalize },
  image: { type: String },
  password: { type: String, set: md5, get: (_v: string) => '*****' },
  removedAt: { type: Date },
}, {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  toJSON: { getters: true, versionKey: false, virtuals: false },
  toObject: { getters: true, versionKey: false, virtuals: false },
}));

export default User;
