import mongoose from "mongoose";
const RecipeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instruction: { type: String, required: true },
    imageUrl: { type: String, required: true },
    cookingTime: { type: String, required: true },
    userOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export const RecipeModel = mongoose.model("recipes", RecipeSchema);
