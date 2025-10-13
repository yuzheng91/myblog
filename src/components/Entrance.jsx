import { React, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Entrance() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>YuZheng's Blog</h1>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff8a80",
          "&:hover": { backgroundColor: "#ff5252" },
          width: "200px",
          height: "60px",
        }}
        onClick={goToHome}
      >
        Welcome!
      </Button>
      
    </div>
  );
}
