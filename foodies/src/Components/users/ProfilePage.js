import authStore from "../../stores/authStore";
import { useState } from "react";
import { observer } from "mobx-react";
import recipesStore from "../../stores/recipesStore";
import RecipeItem from "../Recipes/RecipeItem";

function ProfilePage() {
  recipesStore.getUserInfo(authStore.user.id);
  console.log(recipesStore.CurrentUser.recipes, "current user profile");

  return (
    <div>
      <div className="center">
        <div className="container">
          <h1>My Recipes</h1>
          <h1>{authStore.user.username}</h1>

          {recipesStore.CurrentUser.recipes?.map((recipe) =>
            recipesStore.recipes
              .filter((recipeitem) => recipeitem._id === recipe)
              .map((recipe) => (
                <div>
                  <h1>{recipe.name}</h1>
                  <h1>{recipe.instructions}</h1>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default observer(ProfilePage);
