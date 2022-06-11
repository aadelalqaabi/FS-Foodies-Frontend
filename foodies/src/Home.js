import { observer } from "mobx-react";
import RecipeItem from "./Components/Recipes/RecipeItem";
import recipesStore from "./stores/recipesStore";

function Home() {
  const recipesList = recipesStore.recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} recipe={recipe} />
  ));

  return (
    <div>
      <div className="center">
        <div className="container" style={{ width: "70%" }}>
          <h1>Welcome to recipe</h1>
        </div>
      </div>
      <div className="center">
        <div className="container" style={{ width: "70%" }}>
          <div className="categorycontainer">
            <h1 className="categorytitle">Available recipes</h1>
            <div className="categoriescarousel">{recipesList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Home);
