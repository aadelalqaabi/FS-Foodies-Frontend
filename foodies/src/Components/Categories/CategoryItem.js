import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <div className="categoryshape">
      <Link to={`/RecipesList/${category._id}`}>
        <button className="categorybutton">
          <img className="categoryimage" src={category.image}></img>
        </button>
        <div className="categoryname">
          <h5>{category.name}</h5>
        </div>
      </Link>
    </div>
  );
}

export default observer(CategoryItem);
