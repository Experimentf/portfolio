import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    alpha,
    AppBar,
    Box,
    List,
    ListItem,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import NavBrand from "./NavBrand";
import NavLink from "./NavLink";

const links = [
    { href: "#about", title: "About" },
    { href: "#work", title: "Work" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
];

const Navbar = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const [elevation, setElevation] = useState(0);
    const [open, setOpen] = useState(false);

    // Close drawer
    const handleClose = () => {
        setOpen(false);
    };

    // Open drawer
    const handleOpen = () => {
        setOpen(true);
    };

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
            sx={(theme) => ({
                background: alpha(theme.palette.background.paper, 0.5),
                backdropFilter: "blur(10px)",
            })}
        >
            <Toolbar>
                <NavBrand href="#home" />
                <Box flexGrow={1} />
                {!isSmall ? (
                    links.map((l, idx) => (
                        <NavLink href={l.href} title={l.title} key={idx} />
                    ))
                ) : (
                    <Ham
                        open={open}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                    />
                )}
            </Toolbar>
            {isSmall && (
                <Accordion
                    expanded={open}
                    elevation={0}
                    sx={{
                        background: "transparent",
                        width: "100vw",
                        maxWidth: 450,
                    }}
                >
                    <AccordionSummary
                        sx={{ display: "none" }}
                    ></AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {links.map((l, idx) => (
                                <ListItem
                                    key={idx}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <NavLink
                                        href={l.href}
                                        title={l.title}
                                        handleClose={handleClose}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            )}
        </AppBar>
    );
};

const Ham = ({ open, handleOpen, handleClose, sx = {} }) => {
    return (
        <Box
            sx={{
                width: 25,
                zIndex: 1000,
                ...sx,
            }}
            onClick={open ? handleClose : handleOpen}
        >
            <Box
                sx={(theme) => ({
                    width: "100%",
                    height: "1px",
                    my: 1,
                    background: theme.palette.text.primary,
                    transform: !open ? "none" : "rotate(45deg)",
                    transformOrigin: "0 0",
                    transition: "0.5s ease",
                })}
            />
            <Box
                sx={(theme) => ({
                    width: "100%",
                    height: "1px",
                    my: 1,
                    background: theme.palette.text.primary,
                    opacity: !open ? 1 : 0,
                    transition: "0.5s ease",
                })}
            />
            <Box
                sx={(theme) => ({
                    width: "100%",
                    height: "1px",
                    my: 1,
                    background: theme.palette.text.primary,
                    transform: !open ? "none" : "rotate(-45deg)",
                    transformOrigin: "0 0",
                    transition: "0.5s ease",
                })}
            />
        </Box>
    );
};

export default Navbar;
