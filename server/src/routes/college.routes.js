import { Router } from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { collegReq } from "../controllers/collegeFromController.js";

const collegeRouter = Router();

collegeRouter.route("/createCollege").post(verifyToken, collegReq);

export default collegeRouter;
