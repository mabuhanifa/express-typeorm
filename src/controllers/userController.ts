import { Request, Response } from "express";

import {
  deleteUserService,
  getUserService,
  getUsersService,
} from "../services/userServices";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await getUsersService();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await getUserService(id);

    user
      ? res.json({ success: true, data: user })
      : res.json({ success: false, message: `User with id ${id} not found` });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const isDeleted = Number(await deleteUserService(id));
    isDeleted > 0
      ? res.json({ success: true, message: `User with id ${id} deleted` })
      : res.json({ success: false, message: `User with id ${id} not found` });
  } catch (error) {
    console.log(error);
  }
}
