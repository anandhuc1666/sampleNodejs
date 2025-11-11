import User from "../model/userShema.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { email, password, name, number } = req.body;
  try {
    if(!email||!password||!name||!number){
        return res.status(404).json({message:"please fill the registration "})
    }
    const users = await User.findOne({ email });
    if (!users) {
      return res
        .status(400)
        .json({ message: `sorry no user are exsisited in ${user}` });
    }
    const passHide = await bcrypt.hash(password, 8);
    const user = await User.insertOne({
      email: email,
      password: passHide,
      number: number,
      name: name,
    });
    if(user){
        return res.status(201).json({message:`new user is registered`})
    }
    await user.save()
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internel server issue" });
  }
};
