import { Box, Card, Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);
const MotionAvatar = motion.create(Avatar);

export default function SkillItem({ logo, skillName }) {
  return (
    <MotionCard
      elevation={1}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      sx={{
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        // 讓卡片內容水平：xs 直、md 橫
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: 2, md: 3 },
      }}
    >
      <MotionAvatar
        src={logo}
        alt={`${skillName} logo`}
        sx={{
          width: { xs: 84, md: 108 },
          height: { xs: 84, md: 108 },
          flexShrink: 0,
          boxShadow: "0 4px 18px rgba(0,0,0,.12)",
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.5 }}
        viewport={{ once: false }}
      />
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {skillName}
      </Typography>
    </MotionCard>
  );
}
