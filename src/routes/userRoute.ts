import express from "express";
import { getUser, getUsers } from "../controllers/userController";
const app = express();
const router = express.Router();

router.route("/user").get(getUsers);
router.route("/user/:id").get(getUser);

export default router;
