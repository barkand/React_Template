const {
  SendAuthMobile,
  SendAuthMobileCode,
} = require("../../../auth/AuthMobile");

module.exports = new (class MobileController {
  SendMobile = async (req, res) => {
    if (process.env.API_TYPE === "GRAPHQL") {
      const mobileNumber = req.username;

      try {
        let _result = await SendAuthMobile(mobileNumber);
        if (_result.status === "success") {
          return { status: 200, message: "mobile success sended" };
        } else {
          return { status: 500, message: "SendAuthMobile: error" };
        }
      } catch (err) {
        console.log(err);
        return { status: 500, message: err };
      }
    } else {
      const mobileNumber = req.body.username;

      try {
        let _result = await SendAuthMobile(mobileNumber);

        if (_result.status === "success") {
          res
            .status(200)
            .send({ status: 200, message: "mobile success sended" });
        } else {
          res
            .status(500)
            .send({ status: 500, message: "SendAuthMobile: error" });
        }
      } catch (err) {
        console.log(err);
        res.status(500).send({ status: 500, message: err });
      }
    }
  };

  SendMobileCode = async (req, res) => {
    if (process.env.API_TYPE === "GRAPHQL") {
      const mobileNumber = req.username;
      const receivedCode = req.receivedCode;

      try {
        let _result = await SendAuthMobileCode(mobileNumber, receivedCode);
        if (_result.status === "success") {
          return { status: 200, message: "code is true" };
        } else {
          return { status: 400, message: "code is wrong" };
        }
      } catch (err) {
        console.log(err);
        return { status: 500, message: err };
      }
    } else {
      const mobileNumber = req.body.username;
      const receivedCode = req.body.receivedCode;

      try {
        let _result = await SendAuthMobileCode(mobileNumber, receivedCode);

        if (_result.status === "success") {
          res.status(200).send({ status: 200, message: "code is true" });
        } else {
          res.status(400).send({ status: 400, message: "code is wrong" });
        }
      } catch (err) {
        res.status(500).send({ status: 500, message: err });
      }
    }
  };
})();
