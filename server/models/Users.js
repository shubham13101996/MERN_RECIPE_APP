import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipes" }],
  },
  {
    timestamp: true,
  }
);

export const UserModel = mongoose.model("users", UserSchema);
