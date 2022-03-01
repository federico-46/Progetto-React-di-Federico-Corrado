import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import SingleRecipe from "./pages/SingleRecipe";
//import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipe/:id" element={<SingleRecipe />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
