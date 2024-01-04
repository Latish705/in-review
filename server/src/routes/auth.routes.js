import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";
// import { upload } from "../middlewares/multerMiddleware.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const authRouter = Router();
authRouter.route("/register").post(
  // upload.fields([
  //   {
  //     name: "avatar",
  //     maxcount: 1,
  //   },
  // ]),
  registerUser
);

authRouter.route("/login").post(loginUser);

authRouter.route("/logout").post(verifyToken, logoutUser);

export default authRouter;
