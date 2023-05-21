import express from "express";
import { userController } from "../controllers/userController";
const app = express();
const router = express.Router();

router.route("/").get(userController);

export default router;
