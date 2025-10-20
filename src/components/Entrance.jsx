import React, { use } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Entrance() {
  const { scrollY } = useScroll();
  const scaleLogo = useTransform(scrollY, [0, 200], [1, 0.6]);
  const gap = useTransform(scrollY, [0, 200], [24, 12]);
  const padY = useTransform(scrollY, [0, 200], [12, 6]);
  const blurPx = useTransform(scrollY, [0, 200], [0, 8]);
  const bgAlpha = useTransform(scrollY, [0, 200], [0.0, 0.16]);
  const shadowA = useTransform(scrollY, [0, 200], [0, 0.35]);
  const navHeight = useTransform(scrollY, [0, 200], [72, 52]);
  const navHeightSpring = useSpring(navHeight, {
    stiffness: 300,
    damping: 30,
  });
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          inset: 0, // top:0; right:0; bottom:0; left:0
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          zIndex: 1,
        }}
      />

      {/* 上方導覽 */}
      <Stack
        component={motion.div}
        direction="row"
        style={{
          height: navHeightSpring,
          paddingTop: padY,
          //backgroundColor: bgAlpha.to(a => `rgba(15,16,20,${a})`),
          //backdropFilter: blurPx.to(v =>`blur(${v}px)`),
          //boxShadow: shadowA.to(a => `0 10px 30px rgba(0,0,0,${a})`),
        }}
        sx={{
          position: "absolute",
          top: { xs: 16, sm: 28 },
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: "center",
          textShadow: "0 1px 4px rgba(0,0,0,.6)",
          opacity: 0.8,
          zIndex: 2,
        }}
      >
        <NavItem to="/about">About</NavItem>
        <NavItem to="/articles">Articles</NavItem>
        <NavItem to="https://github.com/yuzheng91?tab=repositories">
          Github
        </NavItem>
      </Stack>

      {/* 中央標題 */}
      <Typography
        component={motion.h1}
        style={{ scale: scaleLogo, margin: 0 }}
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

      {/* 下方小字 */}
      <Typography
        sx={{
          position: "absolute",
          bottom: { xs: 12, sm: 24 },
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
        "&:hover": { opacity: 1, transform: "translateY(-1px)" },
      }}
    >
      {children}
    </Box>
  );
}
