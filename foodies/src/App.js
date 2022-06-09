import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import CategoriesList from "./Components/CategoriesList";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/CategoriesList" element={<CategoriesList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
