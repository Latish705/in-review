import mongoose from "mongoose";
const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  students: { type: Number },
  rank: { type: Number },
  courses: [{ type: String }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
});

export const College = mongoose.model("College", CollegeSchema);
