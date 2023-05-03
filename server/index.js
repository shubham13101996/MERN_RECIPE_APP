import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
mongoose
  .connect("mongodb://localhost:27017/MERN_Recipe_APP")
  .then(() => {
    console.log("ALL OKK => Connect To MongoDB Database");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3001, () => {
  console.log("Server Started");
});
