import { Waitlist } from '@api/db/models/joinWaitlist';

export const createWaitlist = async (email: string) => {
  const emailExist = await Waitlist.findOne({ email: email });
  if (emailExist?.id) {
    return 'Email already exists in the waitlist.';
  }
  const waitlist = new Waitlist({ email });
  await waitlist.save();
};
