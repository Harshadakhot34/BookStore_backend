import mongoose, { Types } from "mongoose";

const userSchema = mongoose.Schema({
  focusullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },

});
const user = mongoose.model("User", userSchema)

export default user;