import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  answerOf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  answer: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
});

export const Answer = mongoose.model("Answer", AnswerSchema);
