import { Box, Card, Avatar, Typography} from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);
const MotionAvatar = motion.create(Avatar);

export default function EducationItem({ logo, degree, institute, school, period }) {
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
      {/* 左邊：校徽 */}
      <MotionAvatar
        src={logo}
        alt={`${school} logo`}
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

      {/* 右邊：文字 */}
      <Box
        sx={{
          minWidth: 0,         // 防止文字把卡片撐爆
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 0.5,
        }}
      >
        {/* Degree 主標 */}
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {degree}
        </Typography>

        {/* 學院 / 系所 副標 */}
        <Typography variant="body2" color="text.secondary">
          {institute}
        </Typography>

        {/* 校名與期間（可選） */}
        {(school || period) && (
          <Typography variant="caption" color="text.secondary">
            {school} {school && period ? "· " : ""}{period}
          </Typography>
        )}
      </Box>
    </MotionCard>
  );
}