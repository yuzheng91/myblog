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

  // nav的模糊特效
  const blurPx = useTransform(scrollY, [0, 1000], [0, 8]);
  const bgAlpha = useTransform(scrollY, [0, 1000], [0, 0.16]);
  const blurFilter = useMotionTemplate`blur(${blurPx}px)`;
  const navBg = useMotionTemplate`rgba(15, 16, 20, ${bgAlpha})`;
  const shadowA = useTransform(scrollY, [0, 1000], [0, 0.35]);
  const navShadow = useMotionTemplate`0 10px 30px rgba(0, 0, 0, ${shadowA})`;
  const navHeight = useTransform(scrollY, [0, 1000], [150, 120]);
  const navHeightSpring = useSpring(navHeight, { stiffness: 300, damping: 30 });
  const navFont = useTransform(scrollY, [0, 1000], [28, 16]);
  const gap = useTransform(scrollY, [0, 1000], [24, 12]);
  const padY = useTransform(scrollY, [0, 1000], [12, 6]);

  // 主頁特效參數 ===
  const s1Opacity = useTransform(scrollY, [0, 1000], [1, 0]);
  const s1Y = useTransform(scrollY, [0, 1000], [0, -40]);
  const scaleLogo = useTransform(scrollY, [0, 1000], [1, 0.6]);

  // About頁面
  const s2Opacity = useTransform(scrollY, [0, 1000, 2000], [0, 1, 0]);
  const s2Y = useTransform(scrollY, [1000, 2000], [0, -40]);

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "300vh", position: "relative" }}>
      {/* === 1) 導覽列：固定在最上方；不受 hero 的 opacity 影響 === */}
      <Stack
        component={motion.div}
        direction="row"
        style={{
          height: navHeightSpring,
          paddingTop: padY,
          backgroundColor: navBg, // 半透明 + 背後毛玻璃
          backdropFilter: blurFilter,
          WebkitBackdropFilter: blurFilter,
          boxShadow: navShadow,
        }}
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: (t) => t.zIndex.appBar + 10, // 確保壓過背景圖
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          pointerEvents: "auto",
        }}
      >
        <Stack
          component={motion.nav}
          direction="row"
          sx={{
            width: "100%",
            maxWidth: 960,
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
          style={{ gap, fontSize: navFont }}
        >
          <NavItem to="/about">About</NavItem>
          <NavItem to="/articles">Articles</NavItem>
          <NavItem to="https://github.com/yuzheng91?tab=repositories">
            Github
          </NavItem>
        </Stack>
      </Stack>

      {/* === 2) Hero：背景圖 + 標題 + 小字（自己淡出/上推） === */}
      <Box
        component={motion.div}
        style={{ opacity: s1Opacity, y: s1Y }}
        sx={{ position: "relative", height: "100vh", width: "100%" }}
      >
        {/* 背景圖鋪滿首屏 */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* 中央大標 */}
        <Typography
          component={motion.h1}
          style={{
            scale: scaleLogo,
            translateX: "-50%",
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

      {/* === 3) 下面內容區：白底會在 hero 淡出時露出 === */}
      <Box
        component={motion.div}
        style={{ opacity: s2Opacity, y: s2Y }}
        sx={{ position: "relative", height: "100vh", width: "100%" }}
      >
        {/* 背景圖鋪滿首屏 */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            //backgroundImage: "url('/background2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 2,
          }}
        />
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
        opacity: 0.9,
        transition: "opacity .2s ease, transform .2s ease",
      }}
    >
      {children}
    </Box>
  );
}
