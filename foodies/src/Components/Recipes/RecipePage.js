import { observer } from "mobx-react";
import { useParams } from "react-router";
import categoriesStore from "../../stores/categoriesStore";
import recipesStore from "../../stores/recipesStore";

function RecipePage() {
  const recipeIdM = useParams().recipeId;
  const recipe = recipesStore.findRecipeName(recipeIdM);
  console.log(recipe);
  const foundCategory = categoriesStore.categories.find(
    (category) => recipe.Category === category._id
  );
  return (
    <div className="center">
      <div className="container">
        <div className="singlerecipetitles">
          <h1 className="singlerecipename">{recipe?.name}</h1>
          <h1 className="singlecategoryname">{foundCategory?.name}</h1>
        </div>
        <img src={recipe?.image} className="singlerecipeimage"></img>
        <p className="singlerecipeinstruction">{recipe?.instructions}</p>
        {recipe.ingredients?.map((ingredient) => (
          <h1 className="singleingredient">{ingredient?.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default observer(RecipePage);
