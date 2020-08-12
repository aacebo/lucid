import mongoose from 'mongoose';

export interface IUserDocument extends mongoose.Document {
}

export default mongoose.model<IUserDocument>('User', new mongoose.Schema<IUserDocument>({
}));
