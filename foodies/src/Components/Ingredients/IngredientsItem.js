import { useState } from "react";
import { useParams } from "react-router";
import recipeStore from "../../stores/recipesStore";

function IngredientsItem({ ingredient, recipe }) {
 

  const addIngredient = []
  const handleIngredients = (event) => {
    if(event.target.checked)
   {
    console.log(recipe, "ID recipeeeee")
   //addIngredient.push(event.target.id);
   console.log(event.target.value, "value")
   console.log(event.target.id, "id")
  recipeStore.updateingredient(event.target.value, '629f8da29345f307a0224d92',event.target.id)
  console.log(event.target.value, "ingredient added ")
   }

     
     

      
  };

  return (
    <div className="">
    <div className="left-text horizental-line ">
      <input
        className="ing-chcek"
        value={ingredient.name}
        id = {ingredient._id}
        type="checkbox"
        onChange={handleIngredients}
      />
      <span className="ing-item  ">{ingredient.name}</span>
    </div>
    </div>
  );
}

export default IngredientsItem;
