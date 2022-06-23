var nodemailer = require("nodemailer");

const SendMail = async (mail_to, subject, content) => {
  var transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_FROM,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.MAIL_FROM,
    to: mail_to,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return { status: "error" };
    } else {
      console.log("Email sent: " + info.response);
      return { status: "success" };
    }
  });

  return { status: "success" };
};

module.exports = SendMail;
