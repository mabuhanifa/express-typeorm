import express from "express";
import { getUsers } from "../controllers/userController";
const app = express();
const router = express.Router();

router.route("/user").get(getUsers);

export default router;
