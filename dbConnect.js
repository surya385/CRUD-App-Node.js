import mongoose from "mongoose";
export default () => {
  mongoose.connect(
    "mongodb+srv://user:newdb@cluster0.ufo0qtl.mongodb.net/test",
    (err) => {
      if(err)
      console.log("Mongo db connection failed", err);
    }
  );
};
