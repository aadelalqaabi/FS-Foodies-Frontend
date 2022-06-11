import React, { useState } from "react";
import { observer } from "mobx-react";
import recipeStore from "../../stores/recipesStore";
import categoriesStore from "../../stores/categoriesStore";
import IngredientsList from "../Ingredients/IngredientsList";

function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState({
      
    }
    );
  const [chosenCategory, setchosenCategory] = useState();
let counter = 1
let recipeid = ''
  const handleChange = (event) => {
    //console.log(event.target.value);

    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });

  };
  const changeState = (event) => {
    setNewRecipe({
      ...newRecipe,
      [event.target.name]: event.target.getAttribute("value"),
    });
    console.log(newRecipe)
    setchosenCategory(event.target.id);
    createRecipe()
  
  }

  const createRecipe = () =>
  {
    if (counter === 1)
    {
   
   recipeid = recipeStore.createRecipe(newRecipe.Category, newRecipe);
   console.log(recipeid, " added new recipe");
    }
    counter = counter + 1
  };
  

  const categoriesList = categoriesStore.categories?.map((category) => (
    <div className="categorydiv">
      <img
        className="Scrollcategoryimage"
        src={category.image}
        onClick={changeState}
        name="Category"
        value={category._id}
        id={category.name}
      />

      <h5 style={{ padding: "0px", margin: "0px" }}>{category.name}</h5>
    </div>
  ));

  const handleSubmit = (event) => {
    console.log(newRecipe, " update");
    console.log(recipeid, " update recipe id");
    recipeStore.updateRecipe(newRecipe, recipeid);
    event.preventDefault();
  };

  return (
    <div>

      <div className=" center ">
        <div className="container">
       
          <h1 style={{ color: " #006d77" }}>Create New Recipe</h1>

          <label style={{ color: " #006d77" }} className="category-section">
            Recipe Name
          </label>
          <input
            className="feedback-input"
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <label style={{ color: " #006d77" }} className="category-section">
            Recipe image
          </label>
          <input
            className="feedback-input"
            id="image"
            type="text"
            name="image"
            onChange={handleChange}
          />

          <label style={{ color: " #006d77" }} className="category-section">
            Write the Recipe instructions{" "}
          </label>
          <textarea
            className="feedback-input"
            id="instruction"
            cols="30"
            rows="5"
            type="text"
            name="instructions"
            onChange={handleChange}
          />

          <label style={{ color: " #006d77" }} className="category-section">
            Choose Your Categories: {chosenCategory}{" "}
          </label>

          <div className="Recipecategoriescarousel">{categoriesList}</div>
        
          <label style={{ color: " #006d77" }} className="category-section">
            Choose Your Categories: {chosenCategory}{" "}
          </label>
          <IngredientsList  recipe ={recipeid} />
          
          <div>
            <button className="add-btn" onClick={handleSubmit}>
              Submit
            </button>
            <button className="add-btn">Rest</button>
          </div>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default observer(AddRecipe);
