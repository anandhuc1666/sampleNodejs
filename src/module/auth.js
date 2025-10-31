import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    requide: true,
  },
  number: {
    type: Number,
  },
  email: {
    type: String,
    requide: true,
  },
  password: {
    type: String,
    requide: true,
  },
});
const Register = mongoose.model("register", RegisterSchema);
export default Register;
