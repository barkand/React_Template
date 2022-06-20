const mariadb = require("mariadb");

let SaveUser = async (username) => {
  const conn = await mariadb.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const rows = await conn.query("SELECT 1 FROM `user` WHERE username = ?", [
      username,
    ]);
    if (rows && rows.length == 0) {
      await conn.query("INSERT INTO `user`(username) value (?)", [username]);
    }
  } finally {
    conn.end();
  }
};

module.exports = { SaveUser };
