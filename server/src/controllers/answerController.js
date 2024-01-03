import asyncHandler from "../utils/AsyncHandler.js";
import { Question } from "../models/Question.Model.js";
import { College } from "../models/College.Model.js";
import {Answer} from "./../models/Answers.Model.js";

const userAnswer=asyncHandler(async(req,res)=>{

   const {questionId}=req.params;
   const {answer}=req.body;
   const newAnswer=new Answer({
    answerOf:questionId,
    answer
   });
   await newAnswer.save();

   await Question.findByIdAndUpdate(
    questionId,
    {$push:{answer: newAnswer._id}},
    {new:true}
   )

   res.status(201).json({ message: "Answer created successfully" });

});

const getAllAnswers=asyncHandler(async(req,res)=>{

});