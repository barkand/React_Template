const jwt = require("jsonwebtoken");

const createToken = (username) => {
  const token = jwt.sign({ username: username }, process.env.SECRET_KEY, {
    expiresIn: process.env.SECRET_KEY_LIFE_TIME,
  });
  const refreshToken = jwt.sign(
    { username: username },
    process.env.REFRESH_SECRET_KEY,
    {
      expiresIn: process.env.REFRESH_SECRET_KEY_LIFE_TIME,
    }
  );
  return { token, refreshToken };
};

const getAuthenticatedUser = (req) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return null;
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded.username;
  } catch (e) {
    return null;
  }
};

module.exports = { createToken, getAuthenticatedUser };
