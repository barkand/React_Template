const { GetConnection } = require(`./conn`);
const { GetActiveCode } = require("../../auth/AuthCode");

let SeveAuthCode = async (username) => {
  let conn = GetConnection();
  let { active_code, expire_code } = GetActiveCode();

  const rows = await conn.query("SELECT 1 FROM users WHERE username = ?", [
    username,
  ]);

  if (rows && rows.length == 0) {
    await conn.query(
      "INSERT INTO users (username, code, code_expire) value (?, ?, ?)",
      [username, active_code, expire_code]
    );
  } else {
    await conn.query(
      `UPDATE users SET code = ?, code_expire = ? WHERE username = ?`,
      [active_code, expire_code, username]
    );
  }
  console.log("1");
  conn.end();

  return active_code;
};

let GetAuthCode = async (username) => {
  let conn = GetConnection();

  const rows = await conn.query(
    "SELECT code FROM users WHERE username = ? and code_expire > now()",
    [username]
  );
  conn.end();

  if (rows && rows.length == 0) {
    return 0;
  } else {
    return rows[0].code;
  }
};

let SaveUser = async (username, token, refresh_token) => {
  let conn = GetConnection();

  const rows = await conn.query("SELECT 1 FROM users WHERE username = ?", [
    username,
  ]);
  if (rows && rows.length > 0) {
    await conn.query(
      `UPDATE users SET token = ?, refresh_token = ? WHERE username = ?`,
      [token, refresh_token, username]
    );
  }
  conn.end();
};

module.exports = { SeveAuthCode, GetAuthCode, SaveUser };
