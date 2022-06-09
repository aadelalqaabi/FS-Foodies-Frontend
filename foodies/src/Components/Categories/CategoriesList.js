import { useState } from "react";
import { observer } from "mobx-react";
//import { Button, Form, Row, Stack } from "react-bootstrap";
import categoriesStore from "../../stores/categoriesStore";
import CategoryItem from "./CategoryItem";

function CategoriesList() {
  const categoriesList = categoriesStore.categories?.map((category) => (
    <CategoryItem key={category._id} category={category} />
  ));

  return (
    <div className="container" style={{width : "70%"}}>
    <div className="categorycontainer" >
      <h1 className="categorytitle">Choose a category</h1>
      <div className="categoriescarousel">{categoriesList}</div>
      <button className="categorysubmit">Next</button>
    </div>
    </div>
  );
}

export default observer(CategoriesList);