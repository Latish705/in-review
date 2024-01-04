import { Router } from "express";
import {
  userQuestion,
  upvoteQuestion,
  downvoteQuestion,
  bookmarkQuestion,
  getAllQuestionsForCollege,
  getQuestionByIdForCollege,
} from "../controllers/questionController.js";
// import { verifyToken } from "../middlewares/authMiddleware.js";

const questionRoutes = Router();

questionRoutes.route("/ask-question").post(userQuestion);

questionRoutes.route("/upvote-question").post(upvoteQuestion);

questionRoutes.route("/downvote-question").post(downvoteQuestion);

questionRoutes.route("/bookmark-question").post(bookmarkQuestion);

questionRoutes
  .route("/get-all-question-college")
  .post(getAllQuestionsForCollege);

questionRoutes.route("/get-question-byId").post(getQuestionByIdForCollege);

export default questionRoutes;
