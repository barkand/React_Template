const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/dbv?authSource=admin`
);

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  token: { type: String },
  refresh_token: { type: String },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
