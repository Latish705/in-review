import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  question: { type: String, required: true },
  hashtags: [{ type: String }],
  upvotes: { type: Number, default: 0 },
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Question = mongoose.model("Question", QuestionSchema);
