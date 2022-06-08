
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import AddRecipe from "./Components/Recipes/AddRecipe";

function App() {
  return (
    <div>
      <Nav />
      <AddRecipe/>
      <Routes>
      <Route path="/recipes" element={<AddRecipe/>} />

      </Routes>
    </div>
  );
}

export default App;
