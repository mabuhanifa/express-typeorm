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

// export async function deleteUserService(id) {
//   const userRepo = AppDataSource.getRepository("User");
//   try {
//     return await userRepo.delete(id);
//   } catch (error) {
//     console.log(error);
//   }
// }
