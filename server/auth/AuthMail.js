const SendMail = require("../services/email/SendMail");

var {
  SeveAuthCode,
  GetAuthCode,
} = require(`../database/${process.env.DATABASE_TYPE.toLowerCase()}/auth`);

const SendAuthMail = async (mail) => {
  let _active_code = await SeveAuthCode(mail);
  let active_code = _active_code
    .toString()
    .replace(/(\d{1})(\d{1})(\d{1})(\d{1})/, "$1-$2-$3-$4");
  console.log(active_code);

  let subj = `${process.env.COMPANY_NAME} Active Code`;
  let content = `Active Code is: ${active_code}`;

  return await SendMail(mail, subj, content);
};

const SendAuthMailCode = async (mail, receivedCode) => {
  receivedCode = receivedCode.replace(/-/g, "");
  let active_code = await GetAuthCode(mail);

  return { status: receivedCode == active_code ? "success" : "error" };
};

module.exports = { SendAuthMail, SendAuthMailCode };
