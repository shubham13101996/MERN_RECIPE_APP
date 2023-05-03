import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import CreateRecipe from "./pages/createRecipe";
import SavedRecipe from "./pages/savedRecipe";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/auth" element={<Auth></Auth>} />
            <Route
              path="/createrecipe"
              element={<CreateRecipe></CreateRecipe>}
            />
            <Route path="/savedrecipe" element={<SavedRecipe></SavedRecipe>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
