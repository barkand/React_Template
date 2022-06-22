var {
  SaveUser,
} = require(`../../../../database/${process.env.DATABASE.toLowerCase()}/auth`);
const { createToken } = require("../../../../auth/jwt");

module.exports = new (class AuthController {
  SendMobile = (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    const sanitized_number = phoneNumber.toString().replace(/[- )(]/g, "");

    res.send({ status: "success" });
  };

  SendCode = (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    const sanitized_number = phoneNumber.toString().replace(/[- )(]/g, "");
    let receivedCode = req.body.receivedCode;

    res.send({ status: receivedCode === "1234" ? "success" : "error" });
  };

  Login = (req, res) => {
    let userId = req.body.phoneNumber;
    let { token, refreshToken } = createToken(userId);

    SaveUser(userId, token, refreshToken);

    res.send({
      connected: true,
      user: userId,
      token: token,
      refreshToken: refreshToken,
    });
  };
})();
