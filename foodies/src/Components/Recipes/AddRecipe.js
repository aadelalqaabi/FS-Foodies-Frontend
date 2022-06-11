import React, { useState } from "react";
import { observer } from "mobx-react";
import recipeStore from "../../stores/recipesStore";
import categoriesStore from "../../stores/categoriesStore";
import IngredientsList from "../Ingredients/IngredientsList";
import ingredientStore from "../../stores/ingredientsStore";

function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState({});
  const [chosenCategory, setchosenCategory] = useState();
  let ingredients = [];
  const handleIngredient = (data) => {
    ingredients.push(data);
  };

  const handleChange = (event) => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });

    console.log(event.target.value);
  };
  const changeState = (event) => {
    setNewRecipe({
      ...newRecipe,
      [event.target.name]: event.target.getAttribute("value"),
    });
    setchosenCategory(event.target.id);
  };

  const categoriesList = categoriesStore.categories?.map((category) => (
    <div className="categorydiv">
      <img
        tabindex="1"
        className="Scrollcategoryimage"
        src={category.image}
        onClick={changeState}
        name="Category"
        value={category._id}
        id={category.name}
        alt="category"
      />

      <h5 style={{ padding: "0px", margin: "0px" }}>{category.name}</h5>
    </div>
  ));

  const handleSubmit = (event) => {
    console.log(ingredients);
    setNewRecipe({ ...newRecipe, ingredients: ingredients });
    recipeStore.createRecipe(newRecipe.Category, newRecipe);
    event.preventDefault();
  };

  return (
    <div>
      <div className=" center ">
        <div className="container">
          <h1 className="createnewrecipetitle">Create New Recipe</h1>

          <label style={{ color: " #000000" }} className="category-section">
            Recipe Name
          </label>
          <input
            className="feedback-input"
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <label style={{ color: " #000000" }} className="category-section">
            Recipe image
          </label>

          <input
            className="feedback-input"
            id="image"
            type="text"
            name="image"
            onChange={handleChange}
          />

          <label style={{ color: " #000000" }} className="category-section">
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

          <label style={{ color: " #000000" }} className="category-section">
            Choose your categories: {chosenCategory}
          </label>

          <div className="recipecategoriescarousel">{categoriesList}</div>

          <label style={{ color: " #000000" }} className="category-section">
            Choose your ingredients:
          </label>

          <div className="ingredientcontainerdiv">
            <div className="oldingredientcontainerdiv">
              {ingredientStore.ingredients?.map((ingredient) => (
                <div className="ingredientcontainer">
                  <h1 id="ingredient" style={{ color: "white" }}>
                    {ingredient.name}
                  </h1>
                  <button
                    onClick={(event) => {
                      handleIngredient(ingredient.name);
                    }}
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>

            <div className="ingredientcontainer">
              {ingredients.map((ingredient) => (
                <div className="newingredientcontainerdiv">
                  <h1>{ingredient}</h1>
                  <button>Remove</button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button className="add-btn" onClick={handleSubmit}>
              Submit
            </button>
            <button className="add-btn">Reset</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default observer(AddRecipe);
