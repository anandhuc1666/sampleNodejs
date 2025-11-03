import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authUser from "./router/auth.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
dotenv.config();


app.get("/", (req, res, next) => {
  res.status(200).json({ message: "server is ready to do" });
  next();
});

app.use('/user',authUser)

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log("mongoDB Not Connected", err));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
