import { observer } from "mobx-react";
import { useParams } from "react-router";
import categoriesStore from "../../stores/categoriesStore";
import RecipeItem from "./RecipeItem";

function RecipesList() {
  const categoryIdM = useParams().categoryId;
  const category = categoriesStore.findCategoryName(categoryIdM);
  const recipesList = category?.recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} recipe={recipe} />
  ));

  return (
    <div className="center">
      <div className="container" style={{ width: "70%" }}>
        <div className="categorycontainer">
          <h1 className="categorytitle">Choose a recipe</h1>
          <div className="categoriescarousel">{recipesList}</div>
        </div>
      </div>
    </div>
  );
}

export default observer(RecipesList);
