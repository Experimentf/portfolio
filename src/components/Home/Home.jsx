import {
    Box,
    SvgIcon,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FullHeight from "../Other/FullHeight";

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
                }}
            >
                こんにちは
            </Typography>
            <SvgIcon
                sx={{
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
