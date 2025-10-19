import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./CardButton.css";

export default function Home() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          textAlign: "center",
          color: "black",
          backgroundColor: "#fce4ec",
          padding: "10px 0",
          zIndex: 1000,
        }}
      >
        Home
      </Typography>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 4, // 卡片之間距離
          paddingTop: "80px", // 讓出上方 header 空間
        }}
      >
        {/* 第一張卡片 */}
        <Box
          component={Link}
          to="/about"
          className="card-button"
        >
          About
        </Box>

        {/* 第二張卡片 */}
        <Box
          component={Link}
          to="/projects"
          className="card-button"
        >
          Projects
        </Box>

        {/* 第三張卡片 */}
        <Box
          component={Link}
          to="/contact"
          className="card-button"
        >
          Contact
        </Box>
      </Box>
    </>
  );
}
