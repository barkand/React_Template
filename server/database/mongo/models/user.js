const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION);

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
