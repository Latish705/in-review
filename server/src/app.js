import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import questionRoutes from "./routes/question.routes.js";
import collegeRouter from "./routes/college.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(cors()); //{origin: process.env.CORS_ORIGIN,credentials: true,}

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// auth routes
app.use("/api/v1/auth", authRouter);

//college routes
app.use("/api/v1", collegeRouter);

//question routes
app.use("/api/v1", questionRoutes);

// answer routes
// app.use("/api/v1");

export default app;
