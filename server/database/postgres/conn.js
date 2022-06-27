const pgp = require("pg-promise")({
  // Initialization Options
});

const cn = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const db = pgp(cn);

module.exports = db;
