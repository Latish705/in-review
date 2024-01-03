const mongoose=require("mongoose");
const Question=require("./Question.Model");

const AnswerSchema=new mongoose.Schema({
    answerOf: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    answer: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  });

  const Answer=mongoose.model('Answer',AnswerSchema);

  module.exports=Answer;