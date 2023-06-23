import express, { Request, Response } from "express";
import "reflect-metadata";
import { db } from "./dataSource/dataSource";
import userRouter from "./routes/userRoute";

const port = 3000;
const app = express();
app.use(express.json());
app.use("/", userRouter);

app.get("/", async (req: Request, res: Response) => {
  res.send({
    message: "Hello from Express Typeorm Server",
  });
});

db.initialize()
  .then(() => {
    console.log(`PostgreSQL database is connected`);
    app.listen(port, () => {
      console.log(`App running and listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
