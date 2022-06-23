const UserModel = require("./models/user");
const { GetActiveCode } = require("../../auth/AuthCode");

let SeveAuthCode = async (username) => {
  let user = await UserModel.findOne({ username: username });
  if (!user) {
    user = new UserModel({
      username: username,
      code: "",
      code_expire: "",
    });
  }
  let { active_code, expire_code } = GetActiveCode();
  user.code = active_code;
  user.code_expire = expire_code;
  await user.save();

  return active_code;
};

let GetAuthCode = async (username) => {
  let user = await UserModel.findOne({ username: username });
  if (!user) {
    return 0;
  }
  if (user.code_expire < new Date()) {
    return 0;
  }
  return user.code;
};

let SaveUser = async (username, token, refresh_token) => {
  let user = await UserModel.findOne({ username: username });
  if (user) {
    user.token = token;
    user.refresh_token = refresh_token;
  }
};

module.exports = { SeveAuthCode, GetAuthCode, SaveUser };
