import { SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import FullHeight from "../Other/FullHeight";
import { animated, useSpring } from "@react-spring/web";

const Home = (props) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <FullHeight
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ position: "relative", width: "100%" }}
            {...props}
        >
            <Typography
                variant={isSmall ? "h2" : "h1"}
                color="text.primary"
                fontWeight={600}
                fontFamily={"Noto Sans JP"}
                sx={{
                    position: "absolute",
                    width: "100%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: isSmall ? "100%" : "auto",
                    writingMode: isSmall ? "vertical-rl" : "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    userSelect: "none",
                }}
            >
                {"こんにちは".split("").map((ch, idx) => (
                    <Span ch={ch} idx={idx} key={idx} />
                ))}
            </Typography>
            <SvgIcon
                sx={{
                    width: isSmall ? 300 : 400,
                    height: isSmall ? 300 : 400,
                    zIndex: -1,
                }}
                viewBox="0 0 100 100"
                data-aos="fade-in"
                data-aos-duration="1000"
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

const Span = ({ ch, idx }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const { distance } = useSpring({
        from: { distance: 0 },
        to: { distance: 1 },
        loop: { reverse: true },
    });

    return (
        <animated.span
            style={{
                display: "block",
            }}
            data-aos="fade-in"
            data-aos-duration="1000"
        >
            {ch}
        </animated.span>
    );
};

export default Home;
