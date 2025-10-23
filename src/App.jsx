import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Entrance from "./components/Entrance.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/profile/" element={<Entrance />}></Route>
      </Routes>
    </>
  );
}

export default App;
