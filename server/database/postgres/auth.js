const db = require(`./conn`);
const { GetActiveCode } = require("../../auth/AuthCode");

let SeveAuthCode = async (username) => {
  db.connect();
  let { active_code, expire_code } = GetActiveCode();
  const rows = await db.query("SELECT 1 FROM users WHERE username = $1", [
    username,
  ]);

  if (rows && rows.length == 0) {
    await db.query(
      "INSERT INTO users (username, code, code_expire) values ($1, $2, $3)",
      [username, active_code, expire_code]
    );
  } else {
    await db.query(
      `UPDATE users SET code = $1, code_expire = $2 WHERE username = $3`,
      [active_code, expire_code, username]
    );
  }

  return active_code;
};

let GetAuthCode = async (username) => {
  db.connect();
  console.log("2");
  const rows = await db.query(
    "SELECT code FROM users WHERE username = $1 and code_expire > now()",
    [username]
  );

  if (rows && rows.length == 0) {
    return 0;
  } else {
    return rows[0].code;
  }
};

let SaveUser = async (username, token, refresh_token) => {
  db.connect();
  const rows = await db.query("SELECT 1 FROM users WHERE username = $1", [
    username,
  ]);
  if (rows && rows.length > 0) {
    await db.query(
      `UPDATE users SET token = $1, refresh_token = $2 WHERE username = $3`,
      [token, refresh_token, username]
    );
  }
};

module.exports = { SeveAuthCode, GetAuthCode, SaveUser };
