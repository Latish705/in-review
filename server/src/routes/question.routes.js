import { Router } from "express";
import { userQuestion } from "../controllers/questionController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const questionRoutes = Router();

questionRoutes.route("/ask-question").post(verifyToken, userQuestion);
