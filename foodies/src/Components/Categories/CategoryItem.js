import { observer } from "mobx-react";

function CategoryItem({ category }) {
  return (
    <div className="categorydiv">
      <button className="categorybutton">
        <img className="categoryimage" src={category.image}></img>
      </button>
      <h5>{category.name}</h5>
    </div>
  );
}

export default observer(CategoryItem);
