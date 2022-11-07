import mongoose from "mongoose";
const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: Number,
    default:0
  },
  
}, {
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
export default mongoose.model("User", users);
