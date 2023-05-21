import express, { Request, Response } from "express";
import "reflect-metadata";
import { AppDataSource } from "./dataSource/dataSource";
import { User } from "./entities/User";

const port = 3000;
const app = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository("User");
  const user = await userRepo.find();
  res.json(user);
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
