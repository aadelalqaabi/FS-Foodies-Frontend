import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import ingredientsStore from "../../stores/ingredientsStore";

function CreateIngredientModal() {
  const [addIngredient, setAddIngredient] = useState({ name: "" });

  const handleChange = (event) => {
    setAddIngredient({
      ...addIngredient,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientsStore.createIngredient(addIngredient);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="field field_v1">
            <input
              className="field__input"
              type="text"
              placeholder="Add New Ingredient"
              name="name"
              onChange={handleChange}
            />
            <span className="field__label-wrap">
              <span className="field__label">Add New Ingredient</span>
            </span>
          </label>
          <input
            className="button-7 ing-create"
            type="submit"
            value="Add Ingredient"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateIngredientModal;
{
  /* <form onSubmit={handleSubmit}>
            <div className="form__group field">
                <input className="form__field" type="text" placeholder="Add New Ingredient" name="name" onChange={handleChange} />
                <label for="name" className="form__label">Add New Ingredient</label>
                <input className="ing-create" type="submit" value="Add Ingredient" />
            </div>
            
        </form> */
}
