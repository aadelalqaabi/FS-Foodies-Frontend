import { observer } from "mobx-react";
import { useParams } from "react-router";
import categoriesStore from "../../stores/categoriesStore";
import ingredientStore from "../../stores/ingredientsStore";
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
      <div className="singlecontainer">
        <div className="singlerecipetitles">
          <h1 className="singlerecipename">{recipe?.name}</h1>
          <h1 className="singlecategoryname">{foundCategory?.name}</h1>
        </div>
        <img src={recipe?.image} className="singlerecipeimage"></img>
        <h1 className="instructionstitle">Instructions</h1>
        <p className="singlerecipeinstruction">{recipe?.instructions}</p>
        <h1 className="instructionstitle">Ingredients</h1>
        <div className="singleingredientdiv">
          <ul>
            {recipe?.ingredients?.map((ingredient) => (
              <li className="singleingredient">
                {ingredientStore.findIngredientName(ingredient).name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default observer(RecipePage);
