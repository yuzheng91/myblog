import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                textAlign: "center",
                py: 2,
                mt: "auto",
                top: "3000px",
                width: "100%",
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Yu-Zheng Ma. All rights reserved.
            </Typography>
        </Box>
    )
}