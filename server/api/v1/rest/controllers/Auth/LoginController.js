var {
  SaveUser,
} = require(`../../../../../database/${process.env.DATABASE.toLowerCase()}/auth`);
const { createToken } = require("../../../../../auth/jwt");

module.exports = new (class LoginController {
  Login = async (req, res) => {
    let userId = req.body.username;
    let { token, refreshToken } = createToken(userId);

    try {
      await SaveUser(userId, token, refreshToken);

      res.status(200).send({
        connected: true,
        user: userId,
        token: token,
        refreshToken: refreshToken,
      });
    } catch (err) {
      res.status(err.status).send({
        connected: false,
      });
    }
  };
})();