import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Entrance() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          inset: 0, // top:0; right:0; bottom:0; left:0
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
      {/* 上方小字 */}
      <Typography
        sx={{
          position: "absolute",
          top: { xs: 12, sm: 24 },
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: { xs: 12, sm: 14 },
          letterSpacing: 1,
          opacity: 0.5,
          zIndex: 1,
          m: 0, // ← 移除 h 標籤預設 margin 以免位移
        }}
      >
        Learning Never Stops.
      </Typography>

      {/* 中央標題 */}
      <Typography
        component="h1"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(48px, 16vw, 220px)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-.02em",
          textShadow: "0 2px 16px rgba(0,0,0,.7)", // 讓亮背景上仍清楚
          opacity: 1,
          zIndex: 1,
          m: 0,
        }}
      >
        YuZheng
      </Typography>

      {/* 下方導覽 */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1.5, sm: 12 }}
        sx={{
          position: "absolute",
          bottom: { xs: 16, sm: 28 },
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: "center",
          textShadow: "0 1px 4px rgba(0,0,0,.6)",
          opacity: 0.8,
          zIndex: 1,
        }}
      >
        <NavItem to="/about">About</NavItem>
        <NavItem to="/articles">Articles</NavItem>
        <NavItem to="https://github.com/yuzheng91?tab=repositories">Github</NavItem>
      </Stack>
    </>
  );
}

function NavItem({ to, children }) {
  return (
    <Box
      component={Link}
      to={to}
      sx={{
        color: "#fff",
        textDecoration: "none",
        fontSize: { xs: 14, sm: 16 },
        opacity: 0.9,
        transition: "opacity .2s ease, transform .2s ease",
        "&:hover": { opacity: 1, transform: "translateY(-1px)"},
      }}
    >
      {children}
    </Box>
  );
}
