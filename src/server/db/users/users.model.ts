import { model } from 'mongoose';
import { IUserDocument, IUserModel } from '@users.types';
import UserSchema from '@users.schema';

const UserModel = model<IUserDocument>('users', UserSchema) as IUserModel;

export default UserModel;
