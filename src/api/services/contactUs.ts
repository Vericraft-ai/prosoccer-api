import { logger } from '@api/utils/logger';
import { config } from '@app/config';
import { Resend } from 'resend';

export type Payload = {
  name: string;
  email: string;
  message: string;
};
export const contactUs = async (payload: Payload) => {
  const resend = new Resend(config.resendApiKey);

  const { name, email, message } = payload;
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <info@prosoccer.io>`,
      to: 'hello@prosoccer.io',
      subject: 'Contact Us',
      cc: email,
      text: message,
    });

    if (error) {
      return error;
    }
    logger.debug(data);
    await resend.emails.send({
      from: 'Pro Soccer <hello@prosoccer.io>',
      to: email,
      subject: 'Contact Us',
      html: `<p>Thank you for contacting us. We will get back to you soon.</p>`,
    });

    return data;
  } catch (error) {
    logger.error(error);
  }
};
