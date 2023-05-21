import { Request, Response } from "express";
import { getUserService } from "../services/userServices";

export async function userController(req: Request, res: Response) {
  try {
    const users = await getUserService();
    console.log(req.method);
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}
