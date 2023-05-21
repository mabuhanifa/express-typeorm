import express from "express";
import { deleteUser, getUser, getUsers } from "../controllers/userController";
const app = express();
const router = express.Router();

router.route("/user").get(getUsers);
router.route("/user/:id").get(getUser);
router.route("/user/:id").delete(deleteUser);

export default router;
