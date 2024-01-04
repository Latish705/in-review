import { Router } from "express";
import {
  userQuestion,
  upvoteQuestion,
  bookmarkQuestion,
  getAllQuestionsForCollege,
  getQuestionByIdForCollege,
} from "../controllers/questionController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const questionRoutes = Router();

questionRoutes.route("/ask-question").post(verifyToken, userQuestion);

questionRoutes.route("/upvote-question").post(verifyToken, upvoteQuestion);

questionRoutes.route("/bookmark-question").post(verifyToken, bookmarkQuestion);

questionRoutes
  .route("/get-all-question-college")
  .post(verifyToken, getAllQuestionsForCollege);

questionRoutes
  .route("/get-question-byId")
  .post(verifyToken, getQuestionByIdForCollege);
