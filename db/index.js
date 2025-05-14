import mongoose from "mongoose";
import { DbName } from "../constant.js";

export const ConnectDB = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGOOSE_URI}/${DbName}`
    );
    console.log("Database Connected Successfully!", response.connections[0].host);
  } catch (error) {
    console.log("Database Server Error!", error);
  }
};
