import { Router } from "express";
import { deleteUser, getUser, getUsers } from "../controllers/userController";

const router = Router();

router.route("/user").get(getUsers);
router.route("/user/:id").get(getUser).delete(deleteUser);

export default router;
