import { useEffect, useState } from "react";
import { SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import FullHeight from "../Other/FullHeight";

const Home = ({ pages, ...props }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const mnRad = isSmall ? 40 : 30;
    const colors = [
        { r: 18, g: 18, b: 18 },
        { r: 0, g: 18, b: 25 },
        { r: 18, g: 0, b: 18 },
        { r: 0, g: 0, b: 18 },
    ];
    const [rad, setRad] = useState(mnRad);

    const handleScroll = () => {
        const offset =
            window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const cur = offset * (colors.length - 1);
        const prev = Math.floor(cur);
        const next = Math.ceil(cur);

        // setRad(Math.min(mnRad + window.scrollY / 5, 500));
        let newr =
            colors[prev].r + (colors[next].r - colors[prev].r) * (cur - prev);
        let newg =
            colors[prev].g + (colors[next].g - colors[prev].g) * (cur - prev);
        let newb =
            colors[prev].b + (colors[next].b - colors[prev].b) * (cur - prev);
        document.body.style.backgroundColor = `rgb(${Math.round(
            newr
        )}, ${Math.round(newg)}, ${Math.round(newb)})`;
    };

    useEffect(() => {
        document.body.style.backgroundColor = `rgb(${colors[0].r}, ${colors[0].g}, ${colors[0].b})`;
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
                    position: "absolute",
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
                        fill: "red",
                    }}
                />
            </SvgIcon>
        </FullHeight>
    );
};

export default Home;
