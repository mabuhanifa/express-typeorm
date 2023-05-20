import express, { Request, Response } from "express";
import { pool } from "./db";
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
console.log(`object`);
const pools = pool;
app.post("/", (req: Request, res: Response) => {
  const data = req.body;
  try {
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
