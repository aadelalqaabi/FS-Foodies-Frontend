import { useParams } from "react-router";
import recipesStore from "../../stores/recipesStore";
function IngredientsItem({ ingredient }) {
  // const recipeId = "62a0a50cabcaba65f7de5683";
  // const [addIngredient, setAddIngredient] = useParams({
  //     "_id": "62a0a50cabcaba65f7de5683",
  //     "name": "Pepproni Pizza",
  //     "image": "https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=800&height=800",
  //     "ingredients": [],
  // });

  const handleIngredients = (event) => {
    //     const ingredientArr = addIngredient;
    //     ingredientArr.ingredients.push(ingredient._id);
    //     setAddIngredient(ingredientArr);
    //     recipesStore.updateRecipe(addIngredient, recipeId, ingredient._id)
  };

  return (
    <div>
      <input
        className="ing-chcek"
        value={ingredient.name}
        type="checkbox"
        onChange={handleIngredients}
      />
      <span className="ing-item">{ingredient.name}</span>
    </div>
  );
}

export default IngredientsItem;