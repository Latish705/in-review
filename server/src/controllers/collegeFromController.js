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
  
    
    const { name,category,courses} = req.body;
    
    if (
      [name, category, courses].some(
        (field) => field.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }
  
    const existingCollege = await College.findOne({
      $or: [{ name }, { category }],
    });
  
    if (existingCollege) {
      throw new ApiError(400, "User with email or username already exists");
    }
  
    
  
    const college = College.create({
      name,
      category,
      courses,
    });
  
  await college.save();

  res.status(201).json(college);

});
