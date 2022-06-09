import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientsStore {
  constructor() {
    makeAutoObservable(this);
  }
  ingredients = [];

  createIngredient = async (newIngredient) => {
    try {
      const response = await instance.post(
        `/recipes/ingredient`,
        newIngredient
      );
      this.ingredients.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: RecipeStore.js ~ line 16 ~ RecipeStore ~ createProduct= ~ error",
        error
      );
    }
  };

  fetchIngredients = async () => {
    try {
      const response = await instance.get("/ingredient");
      this.ingredients = response.data;
    } catch (error) {
      console.log("IngredientsStore -> fetchIngredients -> error", error);
    }
  };
}

const ingredientStore = new IngredientsStore();
ingredientStore.fetchIngredients();

export default ingredientStore;
