import dotenv from "dotenv";
import express, { Request, Response } from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";
dotenv.config();
const port = 3000;

const app = express();
app.use(express.json());
dotenv.config();

app.post("/", (req: Request, res: Response) => {
  const data = req.body;
  try {
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req: Request, res: Response) => {});

const AppDataSource = new DataSource({
  type: "postgres",
  username: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  database: process.env.DATABASE,
  entities: ["src/entities/*{.ts,.js}"],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log(`PostgreSQL database is connected`);
    app.listen(port, () => {
      console.log(`App running and listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
