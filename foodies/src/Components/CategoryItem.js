import { observer } from "mobx-react";

function CategoryItem({ category }) {
  return (
    <div className="categorydiv">
      <button className="categorybutton">
        <img className="categoryimage" src={category.image}></img>
      </button>
    </div>
  );
}

export default observer(CategoryItem);
