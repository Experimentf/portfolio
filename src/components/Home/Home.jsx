import { useEffect, useState } from "react";
import { SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import FullHeight from "../Other/FullHeight";

const Home = ({ pages, ...props }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const mnRad = isSmall ? 40 : 30;
    const colors = [
        { r: 255, g: 0, b: 0 },
        { r: 0, g: 65, b: 130 },
    ];
    const [color, setColor] = useState(colors[0]);
    const [rad, setRad] = useState(mnRad);

    const handleScroll = () => {
        const val = window.scrollY / document.body.scrollHeight;
        setRad(Math.min(mnRad + window.scrollY / 5, 500));
        let newr = colors[0].r + (colors[1].r - colors[0].r) * val;
        let newg = colors[0].g + (colors[1].g - colors[0].g) * val;
        let newb = colors[0].b + (colors[1].b - colors[0].b) * val;
        setColor({
            r: Math.round(newr),
            g: Math.round(newg),
            b: Math.round(newb),
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <FullHeight
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ position: "relative", width: "100%" }}
            data-aos="fade-in"
            {...props}
        >
            <Typography
                variant={isSmall ? "h2" : "h1"}
                color="text.primary"
                fontWeight={600}
                fontFamily={"Noto Sans JP"}
                sx={{
                    width: "100%",
                    height: isSmall ? "100%" : "auto",
                    writingMode: isSmall ? "vertical-rl" : "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    userSelect: "none",
                }}
            >
                こんにちは
            </Typography>
            <SvgIcon
                sx={{
                    position: "fixed",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1,
                }}
                viewBox="0 0 100 100"
            >
                <circle
                    cx={50}
                    cy={50}
                    r={rad}
                    style={{
                        stroke: "none",
                        fill: `rgb(${color.r},${color.g},${color.b})`,
                    }}
                />
            </SvgIcon>
        </FullHeight>
    );
};

export default Home;
