import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./Game";
import MainMenu from "./Components/MainMenu";
import NotFound from "./Components/NotFound";
import Guide from "./Components/Guide";
import About from "./Components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainMenu />} />
          <Route exact path="/Game" element={<Game />} />
          <Route exact path="/Guide" element={<Guide />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
