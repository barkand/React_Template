const {
  SendAuthMail,
  SendAuthMailCode,
} = require("../../../../../auth/AuthMail");

module.exports = new (class EmailController {
  SendMail = async (req, res) => {
    const mail = req.body.username;
    try {
      let _result = await SendAuthMail(mail);

      if (_result.status === "success") {
        res.status(200).send({ message: "email success sended" });
      } else {
        res.status(500).send({ message: "SendAuthMail: error" });
      }
    } catch (err) {
      res.status(err.status).send({ message: err.message });
    }
  };

  SendMailCode = async (req, res) => {
    const mail = req.body.username;
    const receivedCode = req.body.receivedCode;
    try {
      let _result = await SendAuthMailCode(mail, receivedCode);

      if (_result.status === "success") {
        res.status(200).send({ message: "code is true" });
      } else {
        res.status(400).send({ message: "code is wrong" });
      }
    } catch (err) {
      res.status(err.status).send({ message: err.message });
    }
  };
})();
