
import React, { useState } from "react";


function AddRecipe() {
    console.log("recipe Page")
    return (
    <div className=" center " >
        <div className="container">
        <div className="space-between-div" >
        <h1>Create New Recipe</h1>
        
        <div className="space-between-div">
        <label for="name">Recipe Name</label>
		<input id="name" type="text" />
        </div>
        <div className="space-between-div">
        <label for="instruction">Write the Recipe instructions </label>
		<textarea id="instruction" type="text" />
        </div>
        <div className="space-between-div">
        <label for="categories">Choose Your Categories </label>
        </div>
        <div className="space-between-div" >
            <button className="add-btn">Submit</button>
            <button className="add-btn">rest</button>
        </div>
        </div>
        </div>
    </div>);
}


export default AddRecipe;