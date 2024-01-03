import mongoose from "mongoose";
const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  students: { type: Number },
  rank: { type: Number },
  courses: [{ type: String }],
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
});

const College = mongoose.model("College", CollegeSchema);

module.exports = College;
