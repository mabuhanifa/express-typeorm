import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
const { Pool } = pg;

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: Number(process.env.PORT),
  database: process.env.DATABASE,
});

module.exports = pool;
