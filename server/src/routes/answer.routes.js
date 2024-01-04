import { Router } from "express";
import {
  getAllAnswers,
  userAnswer,
  upvoteAnswer,
  downvoteAnswer,
} from "../controllers/answerController";
import {} from "../middlewares/authMiddleware";

const answerRoutes = Router();

answerRoutes.route("/getAnswersFor").get(getAllAnswers);

answerRoutes.route("/submitAnswer").post(userAnswer);

answerRoutes.route("/upvoteAnswer").post(upvoteAnswer);
answerRoutes.route("/downvoteAnswer").post(downvoteAnswer);

export default answerRoutes;
