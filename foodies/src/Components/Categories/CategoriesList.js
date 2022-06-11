import { observer } from "mobx-react";
//import { Button, Form, Row, Stack } from "react-bootstrap";
import categoriesStore from "../../stores/categoriesStore";
import CategoryItem from "./CategoryItem";
import CategoryModal from "./CategoryModal";

function CategoriesList() {
  const categoriesList = categoriesStore.categories?.map((category) => (
    <CategoryItem key={category._id} category={category} />
  ));

  return (
    <div className="center">
      <div className="container" style={{ width: "70%" }}>
        <div className="categorycontainer">
          <h1 className="categorytitle">Choose a category</h1>
          <CategoryModal />
          <div className="categoriescarousel">{categoriesList}</div>
        </div>
      </div>
    </div>
  );
}

export default observer(CategoriesList);
