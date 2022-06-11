import React, { useState } from "react";
import { observer } from "mobx-react";
import recipeStore from "../../stores/recipesStore";
import categoriesStore from "../../stores/categoriesStore";
import IngredientsList from "../Ingredients/IngredientsList";
import swal from 'sweetalert2';
import ingredientsStore from "../../stores/ingredientsStore";
import CreateIngredientModal from "../Ingredients/CreateIngredientModal";

function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    Category: "",
  instructions: "jk",
    ingredients: [],
    }
    );
  const [chosenCategory, setchosenCategory] = useState();
let counter = 0
let recipeid = ""
  const showAlert = () => {
    swal.fire({
        title: "Success",
        text: "Recipe has been added",
        icon: "success",
        confirmButtonText: "OK",
      });
}
// ingredientsLists
const addIngredient = []
const handleIngredients = (event) => {
  if(event.target.checked)
 {
 //addIngredient.push(event.target.id);
 console.log(event.target.value, "value")
 console.log(event.target.id, "id")
 newRecipe.ingredients.push(event.target.id)


//recipeStore.updateingredient(event.target.value, '629f8da29345f307a0224d92',event.target.id)
console.log(event.target.value, "ingredient added ")
 }
    
};

const ingredientsList = ingredientsStore.ingredients.map((ingredient) => (
  <div >
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
));






  const handleChange = (event) => {

    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });

  };
  const changeState = (event) => {
    setNewRecipe({
      ...newRecipe,
      [event.target.name]: event.target.getAttribute("value"),
    });
    console.log(newRecipe)
    setchosenCategory(event.target.id);
    //createRecipe()
  
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

 
  const handleSubmit = async (event) => {
   await setNewRecipe({
  ...newRecipe,
  ["ingredients"]: addIngredient,
})
  
   recipeStore.createRecipe(newRecipe.Category, newRecipe);
    showAlert()
  
    counter = counter + 1
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