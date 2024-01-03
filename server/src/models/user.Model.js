import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  college: {
    name: {
      type: String,
      required: true,
    },
    Duration: {
      start: { type: Number, required: true },
      end: { type: Number, required: true },
    },
  },
  branch: { type: String, required: true },
  post: { type: String, required: null },
  cgpa: { type: Number, required: true },
});

export const User = mongoose.model("User", UserSchema);
