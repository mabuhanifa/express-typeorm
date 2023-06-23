import dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
dotenv.config();

export const db = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URI,
  logging: false,
  synchronize: true,
  entities: ["./src/Entities/**/*.ts"],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
