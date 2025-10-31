import Register from "../module/auth.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { name, email, number, password } = req.body;
  try {
    if (!name || !email || !number || !password) {
      return res.status(404).json({ message: "please fill the form" });
    }
    const exsisted = await Register.findOne({ email });
    if (exsisted) {
      return res.status(400).json({ message: "user already registers" });
    }
    const hidPass = await bcrypt.hash(password, 8);
    const userRegister = await Register.create({
      name: name,
      number: number,
      email: email,
      password: hidPass,
    });
    await userRegister.save();
    res.status(200).json({ message: "user register successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server not connected" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(404).json({ message: "please fill the form" });
    }
    const findUser = await Register.findOne({ email });
    if (!findUser) {
      return res.status(400).json({ message: "user not be exsisited" });
    }
    const reTake = await bcrypt.compare(password, findUser.password);
    if (!reTake) {
      return res.status(404).json({ message: "user password invalid" });
    }
    res.status(200).json({ message: "user login sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server not respose" });
  }
};
