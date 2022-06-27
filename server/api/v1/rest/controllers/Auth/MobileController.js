const {
  SendAuthMobile,
  SendAuthMobileCode,
} = require("../../../../../auth/AuthMobile");

module.exports = new (class MobileController {
  SendMobile = async (req, res) => {
    const mobileNumber = req.body.username;

    try {
      let _result = await SendAuthMobile(mobileNumber);

      if (_result.status === "success") {
        res.status(200).send({ message: "mobile success sended" });
      } else {
        res.status(500).send({ message: "SendAuthMobile: error" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err });
    }
  };

  SendMobileCode = async (req, res) => {
    const mobileNumber = req.body.username;
    const receivedCode = req.body.receivedCode;
    try {
      let _result = await SendAuthMobileCode(mobileNumber, receivedCode);

      if (_result.status === "success") {
        res.status(200).send({ message: "code is true" });
      } else {
        res.status(400).send({ message: "code is wrong" });
      }
    } catch (err) {
      res.status(500).send({ message: err });
    }
  };
})();
