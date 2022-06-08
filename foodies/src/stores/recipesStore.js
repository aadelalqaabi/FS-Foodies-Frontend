import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipesStore {
  constructor() {
    makeAutoObservable(this);
  }
  recipes = [];

  createRecipe = async (categoryId, newRecipe) => {
    try {
      const response = await instance.post(`/${categoryId}/recipes`, newRecipe);
      this.recipes.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: RecipeStore.js ~ line 16 ~ RecipeStore ~ createProduct= ~ error",
        error
      );
    }
  };

  fetchRecipes = async () => {
    try {
      const response = await instance.get("/recipes");
      this.products = response.data;
    } catch (error) {
      console.log("RecipeStore-> fetchRecipes-> error", error);
    }
  };

  updateRecipe = async (updatedRecipe, recipeId, ingredientId) => {
    try {
      const res = await instance.put(
        `/${recipeId}/ingredients/${ingredientId}`,
        updatedRecipe
      );
      this.recipes = this.recipes.map((recipe) =>
        recipe._id === recipeId ? res.data : recipe
      );
    } catch (error) {
      console.log("RecipeStore-> updatedRecipe-> error", error);
    }
  };
}

const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
// It will only call this function when the app first starts

export default recipesStore;

// axios.METHOD(URL, BODY)

// GET: Fetching Data
// axios.get("http://localhost:8000/api/products");
// Return array of products

// POST => It takes a BODY, and is used when we Send Data (Create)
// axios.post("http://localhost:8000/api/products", newObject);
// Returns a new object

// PUT =>  It takes a BODY, and is used to Update Data. We must pass an ID.
// axios.put(`http://localhost:8000/api/products/${ID}`, updatedObject);
// Returns updated object

// DELETE => Delete some data. We must pass an ID.
// axios.delete(`http://localhost:8000/api/products/${ID}`);
// Returns nothing
