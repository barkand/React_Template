var {
  SeveAuthCode,
  GetAuthCode,
  SaveUser,
} = require(`../../../../database/${process.env.DATABASE.toLowerCase()}/auth`);
const { createToken } = require("../../../../auth/jwt");
const SendAuthMail = require("../../../../auth/AuthMail");

module.exports = new (class AuthController {
  SendMobile = async (req, res) => {
    const mobileNumber = req.body.username.replace(/[- )(]/g, "");

    res.send({ status: "success" });
  };

  SendMobileCode = async (req, res) => {
    const mobileNumber = req.body.username.replace(/[- )(]/g, "");
    const receivedCode = req.body.receivedCode.replace(/-/g, "");

    res.send({ status: receivedCode === "1234" ? "success" : "error" });
  };

  SendMail = async (req, res) => {
    const username = req.body.username;
    let _active_code = await SeveAuthCode(username);
    let active_code = _active_code
      .toString()
      .replace(/(\d{1})(\d{1})(\d{1})(\d{1})/, "$1-$2-$3-$4");
    console.log(active_code);
    let _result = await SendAuthMail(username, active_code);

    res.send(_result);
  };

  SendMailCode = async (req, res) => {
    const username = req.body.username;
    const receivedCode = req.body.receivedCode.replace(/-/g, "");
    let active_code = await GetAuthCode(username);

    res.send({ status: receivedCode === active_code ? "success" : "error" });
  };

  Login = async (req, res) => {
    let userId = req.body.username;
    let { token, refreshToken } = createToken(userId);

    await SaveUser(userId, token, refreshToken);

    res.send({
      connected: true,
      user: userId,
      token: token,
      refreshToken: refreshToken,
    });
  };
})();
