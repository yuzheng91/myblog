import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavItem({
  to,
  children,
  asButton = false,
  onClick,
  colorMV,
}) {
  const baseStyle = {
    color: colorMV || "#fff", // 支援 motion value
    textDecoration: "none",
    fontWeight: 600,
    opacity: 0.9,
    transition: "opacity .2s ease, transform .2s ease",
  };

  if (asButton) {
    return (
      <Box
        component={motion.button}
        whileHover={{ y: -1, opacity: 1 }}
        whileTap={{ scale: 0.98 }}
        onClick={(e) => {
          e.preventDefault();
          onClick && onClick(e);
        }}
        style={{ color: colorMV }}
        sx={{
          // 🔧 把原生 button 預設樣式全部歸零
          appearance: "none",
          border: 0,
          background: "transparent",
          padding: 0, // ← 取消左右內距
          margin: 0,
          minWidth: 0, // ← 有些瀏覽器會給按鈕最小寬度
          lineHeight: 1, // ← 避免文字行高撐大
          cursor: "pointer",

          // 版面行為與原本 <a> 一致
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",

          // 你的原本樣式
          fontWeight: 600,
          opacity: 0.9,
          transition: "opacity .2s ease, transform .2s ease",
        }}
      >
        {children}
      </Box>
    );
  }

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
      style={{ color: colorMV }}
      sx={baseStyle}
    >
      {children}
    </Box>
  );
}
