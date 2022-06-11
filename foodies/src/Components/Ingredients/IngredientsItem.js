import { observer } from "mobx-react";
import { useState } from "react";
import { useParams } from "react-router";
import recipesStore from "../../stores/recipesStore";
function IngredientsItem({ ingredient,recipe }) {
  console.log(recipe.name, "1111recipeeeee")

  const [addIngredient, setAddIngredient] = useState(
    recipe
  );

  const handleIngredients = (event) => {
        const ingredientArr = addIngredient;
        console.log("")
        ingredientArr.ingredients.push(ingredient._id);
        setAddIngredient(ingredientArr);
        recipesStore.updateRecipe(addIngredient, recipe._id, ingredient._id)
  };

  return (
    <div className="">
    <div className="left-text horizental-line ">
      <input
        className="ing-chcek"
        value={ingredient.name}
        type="checkbox"
        onChange={handleIngredients}
      />
      <span className="ing-item  ">{ingredient.name}</span>
    </div>
    </div>
  );
}

export default observer(IngredientsItem);
