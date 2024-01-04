import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      email: this.email,
      password: this.password,
      fullName: this.fullName,
    },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY,
    }
  );
};

UserSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", UserSchema);
