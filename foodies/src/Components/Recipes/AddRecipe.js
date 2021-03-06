import React, { useState } from "react";
import { observer } from "mobx-react";
import recipeStore from "../../stores/recipesStore";
import categoriesStore from "../../stores/categoriesStore";
import IngredientsList from "../Ingredients/IngredientsList";
import ingredientStore from "../../stores/ingredientsStore";
import swal from "sweetalert2";
import ingredientsStore from "../../stores/ingredientsStore";
import CreateIngredientModal from "../Ingredients/CreateIngredientModal";
import authStore from "../../stores/authStore";

function AddRecipe() {
  const [addRec, setAddRec] = useState(authStore.user);
  const [recName, setRecName] = useState("");
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    Category: "62a1083cfec85909b25d827d",
    instructions: "jk",
    ingredients: [],
  });
  const [chosenCategory, setchosenCategory] = useState();

  let counter = 0;
  let recipeid = "";
  const showAlert = () => {
    swal
      .fire({
        title: "Success",
        text: "Recipe has been added",
        icon: "success",
        confirmButtonText: "OK",
      })
      .then(function () {
        window.location = `/RecipePage/${recipeid}`;
      });
  };
  // ingredientsLists
  const addIngredient = [];
  const handleIngredients = (event) => {
    if (event.target.checked) {
      //addIngredient.push(event.target.id);
      console.log(event.target.value, "value");
      console.log(event.target.id, "id");
      newRecipe.ingredients.push(event.target.id);

      //recipeStore.updateingredient(event.target.value, '629f8da29345f307a0224d92',event.target.id)
      console.log(event.target.value, "ingredient added ");
    }
  };

  const ingredientsList = ingredientsStore.ingredients.map((ingredient) => (
    <div>
      <div className="left-text horizental-line ">
        <input
          className="ing-chcek"
          value={ingredient.name}
          id={ingredient._id}
          type="checkbox"
          onChange={handleIngredients}
        />
        <span className="ing-item  ">{ingredient.name}</span>
      </div>
    </div>
  ));

  const handleChange = (event) => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
    if (event.target.name === "name") {
      setRecName(event.target.value);
    }
  };
  const changeState = (event) => {
    setNewRecipe({
      ...newRecipe,
      [event.target.name]: event.target.getAttribute("value"),
    });
    console.log(newRecipe);
    setchosenCategory(event.target.id);
    //createRecipe()
  };

  const createRecipe = () => {
    if (counter === 1) {
      recipeid = recipeStore.createRecipe(newRecipe.Category, newRecipe);
      console.log(recipeid, " added new recipe");
    }
    counter = counter + 1;
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
      />

      <h5 style={{ padding: "0px", margin: "0px" }}>{category.name}</h5>
    </div>
  ));

  const handleSubmit = async (event) => {
    await setNewRecipe({
      ...newRecipe,
      ["ingredients"]: addIngredient,
    });

    await recipeStore.createRecipe(newRecipe.Category, newRecipe);
    
    recipeid = recipeStore.recipes[recipeStore.recipes.length - 1]._id;
    await addToUser(recipeid);

    showAlert();
    event.preventDefault();
  };

  const addToUser =  async () => {
    const rec = addRec;
    rec.recipes.push(recipeid);
    setAddRec(rec);
    console.log("user id :" , rec)
    console.log("user recipe :" ,  addRec[recipeStore.recipes.length - 1])

    await authStore.updateUser(
      addRec[recipeStore.recipes.length - 1],
      rec.id,
      recipeid
    );
  };

  return (
    <div>
      <div className=" center ">
        <div className="container">
          <h1 style={{ color: " #006d77" }}>Create New Recipe</h1>

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

          <label style={{ color: " #006d77" }} className="category-section">
            Choose Your Categories: {chosenCategory}{" "}
          </label>

          <div className="Recipecategoriescarousel">{categoriesList}</div>

          <label style={{ color: " #006d77" }} className="category-section">
            Choose Your Categories: {chosenCategory}{" "}
          </label>
          <div
            className="ing-list-specs  feedback-input"
            style={{ display: "flex" }}
          >
            <div className="ing-scrol " style={{ width: "70%" }}>
              <div>{ingredientsList}</div>
            </div>

            <div style={{ width: "50%" }}>
              <div className="ing-input vertical-line">
                <CreateIngredientModal />
              </div>
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
