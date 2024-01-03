import asyncHandler from "../utils/AsyncHandler.js";
import { Question } from "../models/Question.Model.js";
import {College} from "../models/College.Model.js";

const userQuestion = asyncHandler(async (req, res) => {
  try {
    const { collegeId, question, hashtags, userId } = req.body;

    const newQuestion = new Question({
      college: collegeId,
      question,
      hashtags,
      user: userId,
    });
    await newQuestion.save();

    await College.findByIdAndUpdate(
      collegeId,
      { $push: { reviews: newQuestion._id } },
      { new: true }
    );

    res.status(201).json({ message: 'Question created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const getAllQuestionsForCollege = asyncHandler(async (req, res) => {
  const { collegeId } = req.params; 

  const questions = await Question.find({ college: collegeId }).populate("user", "name");
  
  res.json(questions);
});


const getQuestionByIdForCollege = asyncHandler(async (req, res) => {
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

const upvoteQuestion = asyncHandler(async (req, res) => {
  const { questionId } = req.params;
  const updatedQuestion = await Question.findByIdAndUpdate(
    questionId,
    {$inc:{upvotes:1}},
    {new:true}
  );

  res.json(updatedQuestion);
});

const downvoteQuestion=asyncHandler(async(req,res)=>{
  const {questionId}=req.params;
  const updatedQuestion=await Question.findByIdAndUpdate(
    questionId,
    {$inc:{downvotes:1}},
    {new:true}
  )
})
