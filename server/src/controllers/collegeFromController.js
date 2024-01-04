import College from "../models/College.Model";
import { asyncHandler } from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";

export const collegReq = asyncHandler(async (req, res) => {
  // name: { type: String, required: true },
  // category: { type: String, required: true },
  // students: { type: Number },
  // rank: { type: Number },
  // courses: [{ type: String }],
  // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).json(college);
  } catch (error) {
    res.status(400).json(error);
  }
});
