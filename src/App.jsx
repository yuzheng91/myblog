import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Home from "./components/Home.jsx";
import Entrance from "./components/Entrance.jsx";
import About from "./components/About.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Entrance />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
