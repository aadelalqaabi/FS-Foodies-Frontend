
import React, { useState } from "react";
import { observer } from "mobx-react";
import recipeStore from "../../stores/recipesStore"


function AddRecipe() {
    const [newrecipe, setNewRecipe] = useState({});
    const categoriesList = ["breakfast", " dinner", " japness"]
    const categories = categoriesList.forEach(element =>
        {   
    <div className="circle-category" >
    
        {
            element
        }
 
    </div>
    
        })
        const handleChange = (event) => {
            setNewRecipe({ ...newrecipe, [event.target.name]: event.target.value });
          };
        
        const handleSubmit = (event) => {

            event.preventDefault();
            recipeStore.CreateRecipe(newrecipe);
        }
  
    return (
    <div className=" center " >
         
        <div className="container">
      
        <h1 style={{color : " #006d77"}}>Create New Recipe</h1>
        
        <label  style={{color : " #006d77"}}className="category-section"  >Recipe Name</label>
		<input className="feedback-input" id="name" type="text" name ="name" onChange={handleChange} />
        <label  style={{color : " #006d77"}}className="category-section"  >Recipe image</label>
		<input className="feedback-input" id="image" type="text" name ="image" onChange={handleChange} />
    
        <label  style={{color : " #006d77"}} className="category-section" >Write the Recipe instructions </label>
		<textarea className="feedback-input" id="instruction" cols="30" rows="5" type="text"  name = "instructions" onChange={handleChange}/>
      
    

    <label style={{color : " #006d77"}} className="category-section" >Choose Your Categories </label>
        
        {categories}
 
       
        
       <div>
            <button className="add-btn" onSubmit={handleSubmit}>Submit</button>
            <button className="add-btn">Rest</button>
            </div>
        </div>
    </div>
    );
}


export default observer(AddRecipe);