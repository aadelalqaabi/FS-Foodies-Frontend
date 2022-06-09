import { observer } from "mobx-react";
import React, { useState } from "react";

function RecipeCategoryScroll({ category }) {
    const [state, setstate] = useState()
    const changeState = (event) => {  
        setstate(event.target.name); 
       }; 
  
  return (
    <div className="categorydiv">
      <button className="categorybutton" onClick={changeState} name = {category.name} >
        <img className="Scrollcategoryimage"  src={category.image}/>
      </button>
      <h5 style={{padding: "0px", margin: "0px" }}>{category.name}</h5>
     
    </div>
  );
}

export default observer(RecipeCategoryScroll);
