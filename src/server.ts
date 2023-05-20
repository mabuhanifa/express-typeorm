import express, { Request, Response } from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { pool } from "./db";
const port = 3000;

const app = express();
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  const data = req.body;
  try {
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req: Request, res: Response) => {
  const books = pool.query("SELECT * FROM book");
  res.status(201).json({
    message: `success`,
    data: books,
  });
});

const AppDataSource = new DataSource({});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
