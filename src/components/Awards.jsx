import { Box, Typography, Divider, Stack } from "@mui/material";
import { motion } from "framer-motion";

const awards = [
  { date: "2023-02-27", title: "2023 小佛聖盃圍棋團隊賽", result: "🏆 冠軍" },
  { date: "2020-10-31", title: "第15屆榮三盃全國學生棋王賽", result: "第九名" },
  { date: "2020-06-21", title: "民國109年大森盃圍棋公開賽", result: "亞軍" },
  { date: "2018-12-07", title: "臺北市107學年度中小學教師畫", result: "第八名" },
  { date: "2017-07-09", title: "臺北市107學年度中小學教育盃", result: "第十名" },
  { date: "2016-02-21", title: "2016 南山盃第10屆青少年圍棋公開賽 B 組", result: "第十名" },
  { date: "2015-12-11", title: "臺北市104學年度中小學教育盃圍棋錦標賽", result: "冠軍" },
  { date: "2015-12-06", title: "第二屆「大成杯」全國業餘圍棋棋聖賽", result: "第十名" },
  { date: "2015-11-08", title: "2015 新北市狀元盃全國圍棋公開賽", result: "季軍" },
  { date: "2015-10-25", title: "2015 樂活盃全國圍棋公開賽", result: "殿軍" },
  { date: "2015-09-20", title: "2015 樹林體育盃圍棋公開賽", result: "第八名" },
  { date: "2015-08-16", title: "鈺德盃業餘棋王爭霸賽", result: "亞軍" },
  { date: "2015-07-05", title: "2015 新北市棋王盃全國圍棋公開賽", result: "殿軍" },
  { date: "2015-05-24", title: "鈺德盃業餘棋王爭霸賽", result: "殿軍" },
  { date: "2015-04-12", title: "104年臺北市青年盃圍棋錦標賽", result: "第九名" },
  { date: "2013-10-31", title: "第8屆榮三盃全國學生棋王賽", result: "第十名" },
  { date: "2016", title: "業餘戰神排行榜 Top 50 / 名人堂入選", result: "" },
];

export default function Awards() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 4 }, backgroundColor: "#f9f9fc" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          textAlign: "center",
          mb: 5,
          color: "#1976d2", // 藍色主題
        }}
      >
        🏆 Awards & Achievements
      </Typography>

      <Stack spacing={2} sx={{ maxWidth: 800, mx: "auto" }}>
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                px: 3,
                py: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#e3f2fd", // hover 時淡藍背景
                  transform: "translateY(-2px)",
                  transition: "all .3s ease",
                },
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ color: "#90a4ae" }}>
                  {award.date}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {award.title}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 700, color: "#1976d2" }}>
                {award.result}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Stack>

      <Divider sx={{ my: 6, width: "80%", mx: "auto" }} />

      <Typography
        variant="body1"
        sx={{ textAlign: "center", color: "#546e7a", fontStyle: "italic" }}
      >
        中華民國圍棋協會 / 中國圍棋協會 七段
      </Typography>
    </Box>
  );
}
