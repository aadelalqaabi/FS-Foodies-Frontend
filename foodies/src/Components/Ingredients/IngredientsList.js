import ingredientsStore from "../../stores/ingredientsStore";
import { observer } from "mobx-react";
import IngredientsItem from "../Ingredients/IngredientsItem";
import CreateIngredientModal from "../Ingredients/CreateIngredientModal";

function IngredientsList({recipe}) {
  console.log(recipe,"listt")

  const ingredientsList = ingredientsStore.ingredients.map((ingredient) => (
    <IngredientsItem  key={ingredient._id}  ingredient={ingredient} recipe = {recipe}    />
  ));

  return (
    <div className="ing-list-specs  feedback-input" style={{display : "flex"}}>
      
      

      <div className="ing-scrol " style={{width : "70%"}}>
        <div>{ingredientsList}</div>
      </div>
        
      <div style={{width : "50%"}}>
     
      <div className="ing-input vertical-line">
        <CreateIngredientModal />
      </div>

      </div>
    </div>
  );
}

export default observer(IngredientsList);
