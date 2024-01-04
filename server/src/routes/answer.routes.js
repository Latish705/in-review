import { Router } from "express";
import { getAllAnswers, userAnswer } from "../controllers/answerController";
import {} from "../middlewares/authMiddleware";

const answerRoutes = Router();

answerRoutes.route("/getAnswersFor").get(getAllAnswers);

answerRoutes.route("/submitAnswer").post(userAnswer);

answerRoutes.route("/upvote");

export default answerRoutes;
