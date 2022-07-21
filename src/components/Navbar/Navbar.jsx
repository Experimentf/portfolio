import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBrand from "./NavBrand";
import NavLink from "./NavLink";

const Navbar = () => {
    const [elevation, setElevation] = useState(0);

    // Set elevation on scroll
    const handleScroll = (e) => {
        setElevation(window.scrollY > 1 ? 1 : 0);
    };

    // Scroll event
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            elevation={elevation}
            sx={{ background: "transparent", backdropFilter: "blur(10px)" }}
        >
            <Toolbar>
                <NavBrand href="#home" />
                <Box flexGrow={1} />
                <NavLink href="#about" title="About" />
                <NavLink href="#projects" title="Projects" />
                <NavLink href="#contact" title="Contact" />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
