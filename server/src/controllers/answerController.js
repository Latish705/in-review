import { asyncHandler } from "../utils/AsyncHandler.js";
import { Question } from "../models/Question.Model.js";
import { College } from "../models/College.Model.js";
import { Answer } from "./../models/Answers.Model.js";

export const userAnswer = asyncHandler(async (req, res) => {
  const { questionId } = req.body;
  const { answer } = req.body;

  console.log(questionId, answer);
  const newAnswer = new Answer({
    answerOf: questionId,
    answer,
  });
  await newAnswer.save();

  await Question.findByIdAndUpdate(
    questionId,
    { $push: { answers: newAnswer._id } },
    { new: true }
  );

  res.status(201).json({ message: "Answer created successfully", newAnswer });
});

export const getAllanswers = asyncHandler(async (req, res) => {
  const { questionId } = req.body;
  console.log(questionId, req.body);
  const answers = await Answer.find({ answerOf: questionId });
  res.json(answers);
});

export const upvoteAnswer = asyncHandler(async (req, res) => {
  const { answerId } = req.body;
  const updatedAnswer = await Answer.findByIdAndUpdate(
    answerId,
    { $inc: { upvotes: 1 } },
    { new: true }
  );

  res.json(updatedAnswer);
});

export const downvoteAnswer = asyncHandler(async (req, res) => {
  const { answerId } = req.body;
  const updatedAnswer = await Answer.findByIdAndUpdate(
    answerId,
    { $inc: { downvotes: 1 } },
    { new: true }
  );

  res.json(updatedAnswer);
});
