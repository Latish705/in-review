import { asyncHandler } from "../utils/AsyncHandler.js";
import { College } from "../models/College.Model.js";
import { User } from "./../models/user.Model.js";
import { Question } from "./../models/Question.Model.js";

export const userQuestion = asyncHandler(async (req, res) => {
  try {
    const { collegeId, question, hashtags, description } = req.body.question;

    console.log(question);
    const newQuestion = new Question({
      college: "6596df24d9194c31336a784a",
      question,
      hashtags,
      user: "6596e198cc1152807d1d2991",
      description,
    });
    await newQuestion.save();

    await College.findByIdAndUpdate(
      "6596df24d9194c31336a784a",
      { $push: { reviews: newQuestion._id } },
      { new: true }
    );

    res.status(201).json({ message: "Question created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const getAllQuestionsForCollege = asyncHandler(async (req, res) => {
  const { collegeId } = req.body; // changed from params to body
  // console.log(collegeId);

  const questions = await Question.find({ college: collegeId });
  console.log(questions);
  const reversequestions = questions.reverse();
  res.json(questions);
});

export const getQuestionByIdForCollege = asyncHandler(async (req, res) => {
  const { collegeId, questionId } = req.params;

  const question = await Question.findOne({
    _id: questionId,
  });

  if (question) {
    res.json(question);
  } else {
    res.status(404);
    throw new Error("Question not found for the specified college");
  }
});

export const bookmarkQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.body.questionId;

  try {
    const bookmarkedQuestion = await Question.findOne({
      _id: questionId,
    });

    if (!bookmarkedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.bookmarks.includes(questionId)) {
      return res.status(400).json({ error: "Question already bookmarked" });
    }
    user.bookmarks.push(questionId);

    await user.save();

    res.status(200).json({ message: "Question bookmarked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const getAllBookmarkedQuestions = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate("bookmarks", "question");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const bookmarkedQuestions = user.bookmarks;

    res.status(200).json({ bookmarkedQuestions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const upvoteQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.body;
  console.log(questionId);
  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    { $inc: { upvotes: 1 } },
    { new: true }
  );
  console.log(updatedQuestion);
  res.json(updatedQuestion);
});

export const downvoteQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.body;
  console.log(questionId);
  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    { $inc: { downvotes: 1 } },
    { new: true }
  );

  console.log(updatedQuestion);
  return res.json(updatedQuestion);
});
