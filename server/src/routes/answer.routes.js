import { Router } from "express";
import {
  getAllanswers,
  userAnswer,
  upvoteAnswer,
  downvoteAnswer,
} from "../controllers/answerController.js";
// import {} from "../middlewares/authMiddleware";

const answerRoutes = Router();

answerRoutes.route("/getAnswersFor").get(getAllanswers);

answerRoutes.route("/submitAnswer").post(userAnswer);

answerRoutes.route("/upvoteAnswer").post(upvoteAnswer);
answerRoutes.route("/downvoteAnswer").post(downvoteAnswer);

export default answerRoutes;
