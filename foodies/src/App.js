
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import IngredientsList from "./Components/IngredientsList"


function App() {
  return (
    <div>
      <Nav />
      <IngredientsList />
    </div>
  );
}

export default App;
