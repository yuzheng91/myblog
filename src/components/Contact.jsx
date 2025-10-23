import React from "react";
import { Box, Stack, IconButton } from "@mui/material";
import { Facebook, Instagram, GitHub } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box sx={{ textAlign: "center", backgroundColor: "#f9f9fc",}}>
      <Stack direction="row" spacing={3} justifyContent="center">
        <IconButton
          component="a"
          href="https://www.facebook.com/lugman.ma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.instagram.com/yuzheng_0418/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/yuzheng91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}
