import { ThemeProvider } from "styled-components";
import Cursor from "./components/Cursor/Cursor";
import isTouch from "./helpers/isTouch";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About/About";
import Work from "./components/Pages/Work/Work";
import Contact from "./components/Pages/Contact/Contact";
import Waves from "./components/Waves/Waves";

const theme = {
    main: "#7c8eab",
    disabledMain: "#627087",
    primary: " #d7d2a0",
    secondary: " #0d0d0d",
    background: " #141214",
};

// App
function App() {
    return (
        <ThemeProvider theme={theme}>
            {!isTouch() && <Cursor />}
            <div className="main-container">
                <div className="faded" />
                <Navbar />
                <Waves />
                <main>
                    <About className="page-container" />
                    <Work className="page-container p-50 mb-50" />
                    <Contact className="full-height page-container p-50" />
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
