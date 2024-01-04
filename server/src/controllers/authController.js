import { User } from "../models/user.Model.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

const generateAccessandRefreshToken = async (userId) => {
  const user = await User.findById(userId._id);
  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

export const registerUser = asyncHandler(async (req, res) => {
  //first we will check the all the inputs are present in request
  //we will check does the user with email and username already exists
  //if not then we will upload the avatar sent by user (using multer)
  // will hash the password
  //then if there is not other error then we will save the user in database and send response of success
  const { username, email, password, college, cgpa, branch } = req.body;
  console.log(username, email, password, college, cgpa, branch);
  if (
    [username, password, email, cgpa, branch].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(400, "User with email or username already exists");
  }

  // const avatarLocalPath = req.files?.avatar[0]?.path;

  // const avatar = await uploadToCloudinary(avatarLocalPath);
  // console.log(avatar.url);
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;

  // const coverImage = await uploadToCloudinary(coverImageLocalPath);
  // console.log(coverImage.url);

  const user = User.create({
    username,
    email,
    password,
    college,
    cgpa,
    branch,
    // avatar: avatar.url,
    // coverImage: coverImage.url,
  });

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser },
        "User registered Successfulyy"
      )
    );
});

//Login controller

export const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;
  console.log(email, username, password);
  if ([email, username].some((fields) => fields.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    throw new ApiError(400, "Unable to find user");
  }

  const passwordMatch = await user.isPasswordCorrect(password);

  if (!passwordMatch) {
    throw new ApiError(200, "Password incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessandRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User loggen in successfully"
      )
    );
});

//logut Controller

export const logoutUser = asyncHandler(async (req, res) => {
  console.log(req.user);
  await User.findByIdAndUpdate(
    req.user._id, //in req the user is sent by authMiddleware
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true, //write new here will return
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", accessToken, options)
    .clearCookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

//refresh access token token

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingToken = req.cookie.refreshToken || req.body.refreshToken;

  if (!incomingToken) {
    throw new ApiError(401, "Unauthorized Request");
  }
  try {
    const decodedToken = jwt.verify(
      incomingToken,
      process.env.JWT_REFRESH_TOKEN
    );
    const user = User.findById(decodedToken._id);

    if (!user) {
      throw new ApiError(401, "Invalid Refresh Token");
    }
    if (incomingToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh Token is expired or used");
    }
    const option = {
      httpOnly: true,
      secure: true,
    };

    const { refreshToken, accessToken } = await generateAccessandRefreshToken(
      user._id
    );
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});
