import { createWaitlist } from '@api/db/repositories/waitlist';
import { logger } from '@api/utils/logger';
import { config } from '@app/config';
import { Resend } from 'resend';

export const joinWaitlist = async (email: string) => {
  try {
    await createWaitlist(email);
    const resend = new Resend(config.resendApiKey);
    const { data, error } = await resend.emails.send({
      from: `Prosoccer <hello@prosoccer.io>`,
      to: email,
      subject: 'Waitlist Confirmation',
      html: html,
    });

    if (error) {
      return error;
    }
    return data;
  } catch (error) {
    logger.error(error);
    throw new Error('Failed to join waitlist');
  }
};

const html = `<!DOCTYPE html>
<html
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Waitlist</title> 
  </head>
  <body style="padding: 2%; color: black">
    <div style="margin: 5%; margin-top: 2%; max-width: 100%; font-size: large">
      <p>
        Thank you for your interest in Prosoccer. We are excited to have you on
        our waitlist. We will notify you as soon as a we lunch.
      </p>
      </div>

    <footer
      style="margin: 0.2%; margin-top: 2%; max-width: 100%; font-size: large"
    >
      © 2024 Prosoccer. All rights reserved.
    </footer>
  </body>
</html>
`;
