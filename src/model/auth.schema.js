import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
});
const Users = mongoose.model("clite", UserSchema);
export default Users;
