
import express from "express";
import dbConnect from "./dbConnect.js";
import mongoose from "mongoose";
import userRoutes from "./Routes/UserRoutes.js";
const app = express();
dbConnect();

mongoose.connection.once("open", () => {
  console.log("Mongo db connected successfully");
  app.listen(3000, () => {
    console.log("listening on 3000");
  });
});
app.use(express.json())
app.use("/user",userRoutes)



