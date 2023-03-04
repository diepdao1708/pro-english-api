import { generateEmailTemplate } from '../helper/mailForm';

export const transMail = {
  subject: (email) => `[PRO ENGLISH] VERIFY ACCOUNT: ${email}`,
  template: (username, emailToken) => generateEmailTemplate(username, emailToken)
};