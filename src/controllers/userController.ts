import { Request, Response } from "express";
import { AppDataSource } from "../dataSource/dataSource";
import { getUsersService } from "../services/userServices";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await getUsersService();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(req: Request, res: Response) {
  const userRepo = AppDataSource.getRepository("User");
  try {
    const { id } = req.params;
    const user = await userRepo.findOneBy({ id: id });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
}

// export async function deleteUser(req: Request, res: Response) {
//   try {
//     const { id } = req.params;
//     const user = await id;
//     res.json(user);
//   } catch (error) {
//     console.log(error);
//   }
// }
