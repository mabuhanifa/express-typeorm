import { AppDataSource } from "../dataSource/dataSource";

export async function getUserService() {
  const userRepo = AppDataSource.getRepository("User");
  try {
    return await userRepo.find();
  } catch (error) {
    console.log(error);
  }
}
