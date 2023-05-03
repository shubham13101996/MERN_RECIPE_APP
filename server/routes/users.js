import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (user) {
    return res.json({
      message: "User Already Exist ",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username,
    password: hashedPassword,
  });

  await newUser.save();
  res.json({
    message: "User Registered Successfully",
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (!user) {
    return res.json({
      message: "User Doesn't Exist",
    });
  }

  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) {
    return res.json({
      message: "Username Or Password Doesn't Match",
    });
  }

  const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "15m" });

  res.json({
    message: "User Login Successfully",
    token,
    userId: user._id,
  });
});

export { router as userRouter };
