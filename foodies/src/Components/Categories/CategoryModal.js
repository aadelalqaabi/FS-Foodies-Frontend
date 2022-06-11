import React, { useState } from "react";
import categoriesStore from "../../stores/categoriesStore";

function CreateIngredientModal() {
  const [addCategory, setAddCategory] = useState({ name: "", image: "" });
  const [toggle, setToggle] = useState(false);
  const [Close, setClose] = useState(true);

  const handleChange = (event) => {
    setAddCategory({
      ...addCategory,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    categoriesStore.createCategories(addCategory);
  };

  return (
    <div>
      <button
        onClick={() => {
          setToggle(true);
          setClose(true);
        }}
        className="addCategory"
      >
        Add new
      </button>
      {toggle ? (
        Close ? (
          <div className="categorytoggle">
            <form
              onSubmit={(event) => {
                handleSubmit(event);
                setToggle(false);
              }}
            >
              <div className="togglecontainer">
                <h1>Add New Category</h1>
                <div className="Inputcategorydiv">
                  <input
                    onChange={handleChange}
                    className="Inputcategoryfeild"
                    type="text"
                    name="image"
                    placeholder="Category image"
                  />
                </div>
                <div className="Inputcategorydiv">
                  <input
                    onChange={handleChange}
                    id="name"
                    className="Inputcategoryfeild"
                    type="text"
                    name="name"
                    placeholder="Category name"
                  />
                </div>
                <div className="inputcategorybuttons">
                  <input
                    className="Inputcategorysubmit"
                    value="submit"
                    type="submit"
                  />
                  <button
                    className="Inputcategoryclose"
                    onClick={() => {
                      setClose(false);
                      setToggle(true);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          false
        )
      ) : (
        true
      )}
    </div>
  );
}

export default CreateIngredientModal;
