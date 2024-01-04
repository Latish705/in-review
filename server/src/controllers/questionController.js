import { asyncHandler } from "../utils/AsyncHandler.js";

import { College } from "../models/College.Model.js";
import { User } from "./../models/user.Model.js";
export const userQuestion = asyncHandler(async (req, res) => {
  try {
    const { collegeId, question, hashtags } = req.body;
    const { user } = req.user;
    const { description } = req;

    const newQuestion = new Question({
      college: collegeId,
      question,
      hashtags,
      user: user._id,
      description,
    });
    await newQuestion.save();

    await College.findByIdAndUpdate(
      collegeId,
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
  const { collegeId } = req.params;

  const questions = await Question.find({ college: collegeId }).populate(
    "user",
    "name"
  );

  res.json(questions);
});

export const getQuestionByIdForCollege = asyncHandler(async (req, res) => {
  const { collegeId, questionId } = req.params;

  const question = await Question.findOne({
    _id: questionId,
    college: collegeId,
  }).populate("user", "name");

  if (question) {
    res.json(question);
  } else {
    res.status(404);
    throw new Error("Question not found for the specified college");
  }
});

export const bookmarkQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.params;

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
  const { questionId } = req.params;
  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    { $inc: { upvotes: 1 } },
    { new: true }
  );

  res.json(updatedQuestion);
});

const downvoteQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.params;
  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    { $inc: { downvotes: 1 } },
    { new: true }
  );
});
