import { Container, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Loader from "./Other/Loader/Loader";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";

// Main
const MainComponent = () => {
    const [loading, setLoading] = useState(true);

    // Loading screen
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <Loader />;
    return (
        <>
            <Container sx={{ minHeight: "100vh", overflow: "hidden" }}>
                <Home id="home" />
                <About id="about" sx={{ py: 15 }} />
                <Divider />
                <Work id="work" sx={{ py: 15 }} />
                <Divider />
                <Projects id="projects" sx={{ py: 15 }} />
                <Divider />
                <Contact id="contact" sx={{ pt: 15 }} />
            </Container>
            <Navbar />
        </>
    );
};

export default MainComponent;
