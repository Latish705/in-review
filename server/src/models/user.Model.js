import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
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
  bookmarks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Question", default: 0 },
  ],
  branch: { type: String, required: true },
  post: { type: String },
  cgpa: { type: Number, required: true },
  accessToken: { type: String },
});

export const User = mongoose.model("User", UserSchema);
