import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import About from "./About/About";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

// Main
const MainComponent = () => {
    return (
        <Box>
            <Container sx={{ minHeight: "100vh", pb: 5 }}>
                <Home id="home" />
                <About id="about" sx={{ pt: 15 }} />
            </Container>
            <Navbar />
        </Box>
    );
};

export default MainComponent;
