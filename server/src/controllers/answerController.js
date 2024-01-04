import asyncHandler from "../utils/AsyncHandler.js";
import { Question } from "../models/Question.Model.js";
import { College } from "../models/College.Model.js";
import {Answer} from "./../models/Answers.Model.js";

const userAnswer=asyncHandler(async(req,res)=>{

   const {collegeId,questionId}=req.params;
   const {answer}=req.body;
   const newAnswer=new Answer({
    answerOf:questionId,
    answer,
    college:collegeId
   });
   await newAnswer.save();

   await Question.findByIdAndUpdate(
    questionId,
    {$push:{answers: newAnswer._id}},
    {new:true}
   )

   res.status(201).json({ message: "Answer created successfully" });

});

const getAllanswers = asyncHandler(async(req,res)=>{
  const { questionId }= req.body;
  
  const answers = await Answer.find({answerOf:questionId});
  res.json(answers);

})

const upvoteAnswer = asyncHandler(async (req, res) => {
   const { answerId } = req.params;
   const updatedAnswer = await Answer.findByIdAndUpdate(
     answerId,
     {$inc:{upvotes:1}},
     {new:true}
   );
 
   res.json(updatedQuestion);
 });
 
 const downvoteAnswer=asyncHandler(async(req,res)=>{
   const {answerId}=req.params;
   const updatedAnswer=await Answer.findByIdAndUpdate(
     answerId,
     {$inc:{downvotes:1}},
     {new:true}
   )
 })