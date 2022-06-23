const SendMail = require("./Mail/SendMail");

const SendAuthMail = async (mail_to, active_code) => {
  let subj = `${process.env.COMPANY_NAME} Active Code`;
  let content = `Active Code is: ${active_code}`;

  return await SendMail(mail_to, subj, content);
};

module.exports = SendAuthMail;
