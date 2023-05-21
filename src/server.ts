import dotenv from "dotenv";
import express, { Request, Response } from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
dotenv.config();
const port = 3000;

const app = express();
app.use(express.json());
dotenv.config();

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

app.post("/", async (req: Request, res: Response) => {
  const data = await req.body;
  const userRepo = AppDataSource.getRepository("User");
  try {
    let user: User = new User();
    user = data;
    await userRepo.save(user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository("User");
  const user = await userRepo.find();
  res.json(user);
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
