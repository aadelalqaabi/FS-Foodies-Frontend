import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  return (
    <Link to={`/RecipePage/${recipe._id}`}>
      <div className="recipecontainer">
        <div className="recipeimagediv">
          <img className="recipeimage" src={recipe.image}></img>
        </div>
        <div className="recipename">
          <h5>{recipe.name}</h5>
        </div>
      </div>
    </Link>
  );
}

export default observer(RecipeItem);
