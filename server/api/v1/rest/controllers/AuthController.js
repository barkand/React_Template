var {
  SaveUser,
} = require(`../../../../database/${process.env.DATABASE.toLowerCase()}/auth`);
const { createToken } = require("../../../../auth/jwt");

module.exports = new (class AuthController {
  SendMobile = (req, res) => {
    const mobileNumber = req.body.username.replace(/[- )(]/g, "");

    res.send({ status: "success" });
  };

  SendMail = (req, res) => {
    const email = req.body.username;

    res.send({ status: "success" });
  };

  SendMobileCode = (req, res) => {
    const mobileNumber = req.body.username.replace(/[- )(]/g, "");
    const receivedCode = req.body.receivedCode.replace(/-/g, "");

    res.send({ status: receivedCode === "1234" ? "success" : "error" });
  };

  SendMailCode = (req, res) => {
    const mailNumber = req.body.username;
    const receivedCode = req.body.receivedCode.replace(/-/g, "");

    res.send({ status: receivedCode === "1234" ? "success" : "error" });
  };

  Login = (req, res) => {
    let userId = req.body.username;
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
