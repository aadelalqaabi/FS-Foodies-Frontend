import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoriesStore {
  constructor() {
    makeAutoObservable(this);
  }
  categories = [];

  createCategories = async (newcategory) => {
    try {
      const response = await instance.post("categories", newcategory);
      this.categories.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: CategoriesStore.js ~ line 16 ~ CategoriesStore ~ createCategory= ~ error",
        error
      );
    }
  };

  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.log("CategoriesStore -> fetchCategories -> error", error);
    }
  };
}

const categoriesStore = new CategoriesStore();
categoriesStore.fetchCategories();
export default categoriesStore;

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
