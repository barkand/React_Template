const UserModel = require("./models/user");

let SaveUser = (username) => {
  UserModel.exists({ username: username }, function (err, doc) {
    if (err) {
      console.log(err);
    } else if (!doc) {
      UserModel.create({ username: username });
    }
  });
};

module.exports = { SaveUser };
