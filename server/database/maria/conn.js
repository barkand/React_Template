const mariadb = require("mariadb");

let cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const GetConnection = async () => await mariadb.createConnection(cn);

module.exports = GetConnection;
