import { SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import FullHeight from "../Other/FullHeight";
import { animated, useSpring } from "@react-spring/web";
import Spanner from "../Spanner/Spanner";

const Home = (props) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

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
                    width: isSmall ? 300 : 400,
                    height: isSmall ? 300 : 400,
                    zIndex: -1,
                }}
                viewBox="0 0 100 100"
            >
                <circle
                    cx={50}
                    cy={50}
                    r={45}
                    style={{ stroke: "none", fill: "red" }}
                />
            </SvgIcon>
        </FullHeight>
    );
};

export default Home;
