import { AppDataSource } from "../dataSource/dataSource";

export async function getUsersService() {
  const userRepo = AppDataSource.getRepository("User");
  try {
    return await userRepo.find();
  } catch (error) {
    console.log(error);
  }
}

export async function getUserService(id: number | string) {
  const userRepo = AppDataSource.getRepository("User");
  try {
    return await userRepo.findOne({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUserService(id: number | string) {
  const userRepo = AppDataSource.getRepository("User");
  try {
    const response = await userRepo.delete({
      id: id,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
