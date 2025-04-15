import { ThemeProvider } from "styled-components";
import Cursor from "./components/Cursor/Cursor";
import isTouch from "./helpers/isTouch";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About/About";
import Work from "./components/Pages/Work/Work";
import Contact from "./components/Pages/Contact/Contact";
import Waves from "./components/Waves/Waves";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Aos from "aos";

Aos.init({
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
    offset: 0, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "center", // defines which position of the element regarding to window should trigger the animation
});

const theme = {
    main: "#7c8eab",
    disabledMain: "#627087",
    primary: " #d7d2a0",
    secondary: " #0d0d0d",
    background: " #141214",
};

function Main() {
    const [loading, setLoading] = useState(true);

    // Loading screen
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) return <Loader />;
    return (
        <>
            {!isTouch() && <Cursor data-aos="zoom-in" />}
            <div className="main-container" data-aos="fade-in">
                <div className="faded" />
                <Navbar />
                <Waves />
                <main className="main">
                    <About className="page-container" />
                    <Work className="page-container mb-50" />
                    <Contact className="full-height page-container p-50" />
                </main>
            </div>
        </>
    );
}

// App
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    );
}

export default App;
