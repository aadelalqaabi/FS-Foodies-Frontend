import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import IngredientsList from "./Components/Ingredients/IngredientsList";

import CategoriesList from "./Components/Categories/CategoriesList";
import AddRecipe from "./Components/Recipes/AddRecipe";
import SignUpModal from "./Components/users/SignUpModal";
import SignInModal from "./Components/users/SignInModal";
import SignOutButton from "./Components/users/SignOutButton";
import ProfilePage from "./Components/users/ProfilePage";
import authStore from "./stores/authStore";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/CategoriesList" element={<CategoriesList />}></Route>
        <Route path="/recipe" element={<AddRecipe />} />
        <Route path="/signUp" element={<SignUpModal />} />
        <Route path="/signIn" element={<SignInModal />} />
        <Route path="/user-page" element={<ProfilePage />} />
        <Route path="/:recipeId/ingredients" element={<IngredientsList />} />

      </Routes>
    </div>
  );
}


export default App;
