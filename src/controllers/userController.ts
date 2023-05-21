import { Request, Response } from "express";
import { AppDataSource } from "../dataSource/dataSource";

export async function userController(req: Request, res: Response) {
  const userRepo = AppDataSource.getRepository("User");
  try {
    const user = await userRepo.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
}
