import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userController";

const router = Router();

router.route("/api/user").get(getUsers).post(createUser);
router.route("/api/user/:id").get(getUser).delete(deleteUser);

export default router;
