var {
  SaveUser,
} = require(`../../../../database/${process.env.DATABASE.toLowerCase()}/auth`);

module.exports = new (class AuthController {
  SendMobile = (req, res) => {
    let phoneNumber = req.body.phoneNumber;

    res.send({ status: "success" });
  };

  SendCode = (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    let receivedCode = req.body.receivedCode;
    res.send({ status: receivedCode === "1234" ? "success" : "error" });
  };

  Login = (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    let token = "333";
    let refreshToken = "333";

    SaveUser(phoneNumber, token);
    res.send({
      connected: true,
      user: phoneNumber,
      token: token,
      refreshToken: refreshToken,
    });
  };
})();
