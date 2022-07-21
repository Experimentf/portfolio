import logo from "./logo.svg";
import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import MainComponent from "./components/MainComponent";
import Cursor from "./components/Cursor/Cursor";
import isTouch from "./helpers/isTouch";

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                height="100vh"
                width="100vw"
                position="fixed"
                sx={{
                    zIndex: -100,
                    top: 0,
                    left: 0,
                    background: theme.palette.background.default,
                    pointerEvents: "none",
                }}
            />
            {!isTouch() && <Cursor />}
            <MainComponent />
        </ThemeProvider>
    );
}

export default App;
