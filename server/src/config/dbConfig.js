import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConfig = async () => {
  try {
    const conn = await mongoose
      .connect(`${process.env.MONGO_URL}/${DB_NAME}`)
      .then(() => {
        console.log(`MongoDB connected: ${conn.connection.host}`);
      });
  } catch (error) {
    console.log(error, "DB not connected ");
  }
};

export default dbConfig;
