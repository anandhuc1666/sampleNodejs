import axios from "axios";
import Users from "../model/auth.schema.js";

export const Register = async (req, res) => {
  const { name, number, email, password } = req.body;
  try {
    if (!name || !number || !email || !password) {
      res.status(404).json({ message: "pleass fill the form" });
    }
    const users = await Users.findOne({ email });
    if (users) {
      return res.status(404).json({ message: "user already exssisted" });
    }
    const user = await Users.create({
      email: email,
      password: password,
      name: name,
      number: number,
    });
    await user.save();
    res.status(200).json({ message: "user is registered successfully" });
  } catch (error) {
    console.log("server issue", error);
    res.status(500).json({ message: "server issue" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(404).json({ message: "pleass fill the form" });
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not exsisted" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "user password invalid" });
    }

    const responce = await axios.get(
      "https://dummy-json.mock.beeceptor.com/comments"
    );
      res.status(200)
      .json({ message: "user login sucessfully", user, messages: responce.data });
  } catch (error) {
    console.log(error);
  }
};
