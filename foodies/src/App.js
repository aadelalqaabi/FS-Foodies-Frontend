import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import IngredientsList from "./Components/Ingredients/IngredientsList";

import CategoriesList from "./Components/Categories/CategoriesList";
import AddRecipe from "./Components/Recipes/AddRecipe";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/CategoriesList" element={<CategoriesList />}></Route>
        <Route path="/recipe" element={<AddRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
