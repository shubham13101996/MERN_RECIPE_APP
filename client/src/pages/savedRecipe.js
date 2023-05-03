import React, { useEffect, useState } from "react";
import { axios } from "axios";
import { UseGetUserId } from "../hooks/useGetUserId";

const savedRecipe = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userId = UseGetUserId();

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userId}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSavedRecipe();
  }, []);

  return (
    <div>
      <h1> Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div className="intructions">
              <p>{recipe.intructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} (minute)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default savedRecipe;
