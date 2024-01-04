import { College } from "../models/College.Model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";

export const collegReq = asyncHandler(async (req, res) => {
  // name: { type: String, required: true },
  // category: { type: String, required: true },
  // students: { type: Number },
  // rank: { type: Number },
  // courses: [{ type: String }],
  // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  const { name, category, courses } = req.body;

  if (![name, category].every((field) => typeof field === 'string' && field.trim() !== '')) {
    throw new ApiError(400, "Name and category are required");
  }

  if (!Array.isArray(courses) || courses.length === 0) {
    throw new ApiError(400, "At least one course is required");
  }

  const existingCollege = await College.findOne({
    $or: [{ name }, { category }],
  });

  if (existingCollege) {
    throw new ApiError(400, "College with the same name or category already exists");
  }

  const college = await College.create({
    name,
    category,
    courses,
  });

  res.status(201).json(college);
});
