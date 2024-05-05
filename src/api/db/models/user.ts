import { Schema, model } from 'mongoose';
import { IUser } from '@app/api/interfaces';

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v: string) {
          return /.+@.+\..+/.test(v.toString());
        },
        message: (props: { value: string }) =>
          `${props.value} is not a valid email address!`,
      },
      maxlength: 100,
      required: [true, 'email cannot be empty'],
    },
    username: {
      type: String,
      unique: true,
      maxlength: [12, 'username cannot be greater than 12'],
      minlength: [3, 'username cannot be less than 3 character'],
      required: true,
    },
    wallet_address: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: false,
    },
    role: {
      type: String,
      default: 'user',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function () {
  const userObj = this.toObject();

  userObj.id = userObj._id;
  delete userObj._id;

  delete userObj.createdAt;
  delete userObj.updatedAt;

  delete userObj.__v;
  return userObj;
};

export const User = model<IUser>('User', UserSchema);
