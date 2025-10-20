import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function Entrance() {
  const { scrollY } = useScroll();

  // --- 你原本的動畫值 ---
  const scaleLogo = useTransform(scrollY, [0, 1000], [1, 0.6]);
  const gap = useTransform(scrollY, [0, 1000], [24, 12]);
  const padY = useTransform(scrollY, [0, 1000], [12, 6]);
  const blurPx = useTransform(scrollY, [0, 1000], [0, 8]);
  const bgAlpha = useTransform(scrollY, [0, 1000], [0, 0.16]);
  const shadowA = useTransform(scrollY, [0, 1000], [0, 0.35]);
  const navHeight = useTransform(scrollY, [0, 1000], [72, 52]);
  const navHeightSpring = useSpring(navHeight, { stiffness: 300, damping: 30 });

  const blurFilter = useMotionTemplate`blur(${blurPx}px)`;
  const navBg = useMotionTemplate`rgba(15, 16, 20, ${bgAlpha})`;
  const navShadow = useMotionTemplate`0 10px 30px rgba(0, 0, 0, ${shadowA})`;

  // --- 新增：整個首屏的淡出/上推 ---
  const heroOpacity = useTransform(scrollY, [0, 1000], [1, 0]); // 往下捲到 200px 完全透明
  const heroY = useTransform(scrollY, [0, 1000], [0, -40]); // 可選：微微往上推，增強感覺

  return (
    // 整頁背景是白色，捲動後就露出來
    <Box
      data-hero
      sx={{
        bgcolor: "#fff",
        minHeight: "300vh",
        position: "relative",
      }}
    >
      {/* ★ Hero 包裝器：把首屏所有東西包起來，對 wrapper 做 opacity/y 動畫 */}
      <Box
        component={motion.div}
        style={{ opacity: heroOpacity, y: heroY }}
        sx={{ position: "relative", height: "100vh", width: "100%" }}
      >
        {/* 背景圖（填滿首屏高度） */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* 上方導覽（固定在視窗，會一起淡出，因為包在 hero wrapper） */}
        <Stack
          component={motion.div}
          direction="row"
          style={{
            height: navHeightSpring,
            paddingTop: padY,
            backgroundColor: navBg,
            backdropFilter: blurFilter,
            WebkitBackdropFilter: blurFilter, // Safari
            boxShadow: navShadow,
          }}
          sx={{
            position: "fixed",
            top: { xs: 16, sm: 28 },
            left: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3, // 在背景圖與標題之上
            px: 2,
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "100%",
              maxWidth: 960,
              mx: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
            style={{ gap }}
          >
            <NavItem to="/about">About</NavItem>
            <NavItem to="/articles">Articles</NavItem>
            <NavItem to="https://github.com/yuzheng91?tab=repositories">
              Github
            </NavItem>
          </Stack>
        </Stack>

        <Typography
          component={motion.h1}
          style={{
            scale: scaleLogo,
            translateX: "-50%", // ← 把位移也放進 style（同一個 transform 管道）
            translateY: "-50%",
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "#fff",
            m: 0,
            fontSize: "clamp(48px, 16vw, 220px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-.02em",
            textShadow: "0 2px 16px rgba(0,0,0,.7)",
            zIndex: 2,
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
            opacity: 0.6,
            zIndex: 2,
            m: 0,
            color: "#fff",
          }}
        >
          Learning Never Stops.
        </Typography>
      </Box>

      {/* 底下內容：白底（真正被露出來的區域） */}
      <Box sx={{ width: "100%", mx: "auto", px: 2, py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        <Typography paragraph>
          這裡放你的內容。往下捲時，上面的首屏會逐漸透明，露出這個白底區塊。
        </Typography>
        {/* …更多內容 */}
      </Box>
    </Box>
  );
}

function NavItem({ to, children }) {
  const isExternal = typeof to === "string" && to.startsWith("http");
  const baseProps = isExternal
    ? { component: "a", href: to, target: "_blank", rel: "noopener noreferrer" }
    : { component: Link, to };

  return (
    <Box
      {...baseProps}
      component={motion.a}
      whileHover={{ y: -1, opacity: 1 }}
      whileTap={{ scale: 0.98 }}
      sx={{
        color: "#fff",
        textDecoration: "none",
        fontSize: { xs: 14, sm: 16 },
        opacity: 0.9,
        transition: "opacity .2s ease, transform .2s ease",
      }}
    >
      {children}
    </Box>
  );
}
