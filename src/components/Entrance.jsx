import React, { useCallback } from "react";
import { Box, Typography, Stack, Avatar, Divider } from "@mui/material";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

import NavItem from "./NavItem";
import EducationItem from "./EducationItem";
import Awards from "./Awards";
import Contact from "./Contact";
import Footer from "./Footer";

// ===== 路徑工具：自動加上 BASE_URL 前綴 =====
const BASE = import.meta.env.BASE_URL;
const asset = (p) => `${BASE}${p}`; // 參數不要加「/」

export default function Entrance() {
  const { scrollY } = useScroll();

  const SECTION = {
    homeStart: 0,
    aboutStart: 1000,
    awardsStart: 2000,
    contactStart: 3000,
  };

  // ===== nav 的模糊特效 =====
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

  // ===== 各區動畫控制 =====
  const s1Opacity = useTransform(scrollY, [0, 1000], [1, 0]);
  const s1Y = useTransform(scrollY, [0, 1000], [0, -40]);
  const scaleLogo = useTransform(scrollY, [0, 1000], [1, 0.6]);
  const homeColor = useTransform(
    scrollY,
    [0, 900, 1100, 1200],
    ["#64b5f6", "#64b5f6", "#64b5f6", "#ffffff"]
  );

  const s2Opacity = useTransform(scrollY, [0, 1500, 2000], [0, 1, 0]);
  const s2Y = useTransform(scrollY, [1000, 2000], [0, -40]);
  const MotionAvatar = motion.create(Avatar);
  const MotionBox = motion.create(Box);
  const aboutColor = useTransform(
    scrollY,
    [0, 900, 1000, 1900, 2100],
    ["#ffffff", "#ffffff", "#64b5f6", "#64b5f6", "#ffffff"]
  );

  const s3Opacity = useTransform(scrollY, [0, 2500, 3000], [0, 1, 0]);
  const s3Y = useTransform(scrollY, [1000, 2000], [0, -40]);
  const awardsColor = useTransform(
    scrollY,
    [0, 1900, 2000, 3000, 3100],
    ["#ffffff", "#ffffff", "#64b5f6", "#64b5f6", "#ffffff"]
  );

  const contactColor = useTransform(
    scrollY,
    [0, 2900, 3000],
    ["#ffffff", "#ffffff", "#64b5f6"]
  );

  const scrollToY = useCallback((top) => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "200vh", position: "relative" }}>
      {/* === 1) 導覽列 === */}
      <Stack
        component={motion.div}
        direction="row"
        style={{
          height: navHeightSpring,
          paddingTop: padY,
          backgroundColor: navBg,
          backdropFilter: blurFilter,
          WebkitBackdropFilter: blurFilter,
          boxShadow: navShadow,
        }}
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: (t) => t.zIndex.appBar + 10,
          alignItems: "center",
          justifyContent: "center",
          px: 2,
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
          <NavItem
            asButton
            onClick={() => scrollToY(SECTION.homeStart)}
            colorMV={homeColor}
          >
            Home
          </NavItem>
          <NavItem
            asButton
            onClick={() => scrollToY(SECTION.aboutStart)}
            colorMV={aboutColor}
          >
            About
          </NavItem>
          <NavItem
            asButton
            onClick={() => scrollToY(SECTION.awardsStart)}
            colorMV={awardsColor}
          >
            Awards
          </NavItem>
          <NavItem
            asButton
            onClick={() => scrollToY(SECTION.contactStart)}
            colorMV={contactColor}
          >
            Contact
          </NavItem>
        </Stack>
      </Stack>

      {/* === 2) Hero 區 === */}
      <Box
        component={motion.div}
        style={{ opacity: s1Opacity, y: s1Y }}
        sx={{ position: "relative", height: "100vh", width: "100%" }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${asset("background.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          }}
        />

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

      {/* === 3) About 區 === */}
      <MotionBox
        component="section"
        style={{ opacity: s2Opacity, y: s2Y }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, md: 6 },
            maxWidth: 1080,
            width: "100%",
          }}
        >
          <MotionAvatar
            src={asset("avatar.jpg")}
            alt="Yu-Zheng Ma"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            sx={{
              width: { xs: 200, md: 260 },
              height: { xs: 200, md: 260 },
              boxShadow: "0 6px 18px rgba(0,0,0,.2)",
              flexShrink: 0,
            }}
          />

          <Box
            sx={{
              flex: 1,
              maxWidth: 700,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 700 }}>
              Hi, I’m Yu-Zheng Ma
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.9 }}>
              Welcome to my blog! I am determined to become a great software
              engineer, especially by strengthening my skills in full-stack
              development, cloud technologies, and Docker. The content I share
              here includes technical articles, personal insights, and journal
              entries. The road hasn't been easy, but I'm grateful for the
              progress I've made and hope to keep my passion alive as I move
              forward.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 6, width: "80%", maxWidth: 960 }} />

        <Box sx={{ maxWidth: 960, width: "100%" }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
            Education
          </Typography>

          <EducationItem
            logo={asset("ncku.png")}
            degree="Master’s Degree"
            institute="Institute of Computer and Communication Engineering"
            school="National Cheng Kung University (NCKU)"
            period="2025 – 2027"
          />

          <Divider sx={{ my: 2, opacity: 0.5 }} />

          <EducationItem
            logo={asset("nycu.png")}
            degree="Bachelor’s Degree"
            institute="Department of Computer Science"
            school="National Yang Ming Chiao Tung University (NYCU)"
            period="2020 – 2024"
          />

          <Divider sx={{ my: 2, opacity: 0.5 }} />

          <EducationItem
            logo={asset("hsnu.jfif")}
            degree="High School"
            school="The Affiliated Senior High School of National Taiwan Normal University"
            period="2017 – 2020"
          />
        </Box>
      </MotionBox>

      {/* === 4) Awards + Contact + Footer === */}
      <motion.div style={{ opacity: s3Opacity, y: s3Y }}>
        <Awards />
        <Contact />
        <Footer />
      </motion.div>
    </Box>
  );
}
