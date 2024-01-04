import { Router } from "express";
import {
    getAllAnswers,
    userAnswer
} from "../controllers/answerController"
import { verifyToken } from "../middlewares/authMiddleware";

const answerRoutes = Router();

answerRoutes.route("/getAnswersFor").get(verifyToken, getAllAnswers);

answerRoutes.route("/submitAnswer").post(verifyToken, userAnswer);

export default answerRoutes;
