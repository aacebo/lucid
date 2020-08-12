import mongoose from 'mongoose';
import md5 from 'md5';

import capitalize from '../../utils/capitalize/capitalize.util';

export interface IUserDocument extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  removedAt?: Date;
}

const User: mongoose.Model<IUserDocument> = mongoose.models.User || mongoose.model<IUserDocument>('User', new mongoose.Schema<IUserDocument>({
  email: { type: String, required: true },
  firstName: { type: String, required: true, set: capitalize },
  lastName: { type: String, required: true , set: capitalize },
  password: { type: String, required: true, set: md5, get: (_v: string) => '*****' },
  removedAt: { type: Date },
}, {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  toJSON: { getters: true, versionKey: false, virtuals: false },
  toObject: { getters: true, versionKey: false, virtuals: false },
}));

export default User;
