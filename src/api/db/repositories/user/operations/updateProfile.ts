import { ObjectId } from 'mongoose';
import { User } from '@app/api/db/models';
import { IUser } from '@app/api/interfaces';

const updateProfile = async (
  _id: ObjectId,
  payload: Omit<Partial<IUser>, 'id'>
) => {
  const user = await User.findOneAndUpdate({ _id }, payload, {
    new: true,
    runValidators: true,
  });
  return user;
};

export default updateProfile;
