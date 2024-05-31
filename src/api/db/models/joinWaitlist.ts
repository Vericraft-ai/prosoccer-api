import { Schema, model } from 'mongoose';

interface JoinWaitlist {
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const WaitlistSchema = new Schema<JoinWaitlist>(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

WaitlistSchema.methods.toJSON = function () {
  const contactUsObj = this.toObject();

  contactUsObj.id = contactUsObj._id;
  delete contactUsObj._id;

  delete contactUsObj.createdAt;
  delete contactUsObj.updatedAt;

  delete contactUsObj.__v;
  return contactUsObj;
};

export const Waitlist = model<JoinWaitlist>('JoinWaitlist', WaitlistSchema);
