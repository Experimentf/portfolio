import { Container, Divider } from "@mui/material";
import About from "./About/About";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

// Main
const MainComponent = () => {
    return (
        <>
            <Container sx={{ minHeight: "100vh", pb: 5 }}>
                <Home id="home" />
                <About id="about" sx={{ py: 15 }} />
                <Divider />
                <Projects id="projects" sx={{ py: 15 }} />
            </Container>
            <Navbar />
        </>
    );
};

export default MainComponent;
