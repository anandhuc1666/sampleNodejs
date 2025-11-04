import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "../crud/router/usersRoute.js"
const app = express();
dotenv.config();
app.use(express.json());
app.use('/user',route)

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(`mongoDB not connected`, err));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
