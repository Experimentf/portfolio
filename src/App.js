import logo from "./logo.svg";
import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import MainComponent from "./components/MainComponent";
import Cursor from "./components/Cursor/Cursor";
import isTouch from "./helpers/isTouch";
import AOS from "aos";

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "center", // defines which position of the element regarding to window should trigger the animation
});

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
