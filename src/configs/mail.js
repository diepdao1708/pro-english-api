require('dotenv').config();
import nodemailer from 'nodemailer';

let adminEmail = process.env.MAIL_USER;
let clientId = process.env.GG_CLIENT_ID;
let clientSecret = process.env.GG_CLIENT_SECRET;
let refresh_token = process.env.GG_MAILER_REFRESH_TOKEN;

export const sendMail = (to, subject, htmlContent, myAccessToken) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
        user: adminEmail,
        clientId: clientId,
        clientSecret: clientSecret,
        refresh_token: refresh_token,
        accessToken: myAccessToken
    },
  });

  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  };

  return transporter.sendMail(options);
};