import { Grid, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import FullHeight from "../Other/FullHeight";
import Resume from "../Resume/Resume";
import "./About.css";

const About = (props) => {
    return (
        <FullHeight {...props}>
            <Grid container justifyContent="center">
                <Grid
                    item
                    xs={12}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-offset="120"
                >
                    <Grid container alignItems="center">
                        <Grid item>
                            <Typography
                                variant="h1"
                                align="left"
                                color="text.primary"
                            >
                                Hey!
                            </Typography>
                        </Grid>
                        <Grid item sx={{ p: 2 }}>
                            <Typography variant="h4" className="wave">
                                👋
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        color="text.disabled"
                        variant="h6"
                        sx={{ mt: 5 }}
                    >
                        I am{" "}
                        <Typography
                            variant="span"
                            sx={(theme) => ({
                                color: theme.palette.text.primary,
                            })}
                        >
                            Divyansh Falodiya
                        </Typography>
                        . I am a student of Computer Science Engineering at
                        Indian Institute of Information Technology, Gwalior .
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        my: 2,
                    }}
                    data-aos="zoom-in"
                    data-aos-offset="120"
                >
                    <img
                        src="/images/me2.jpg"
                        alt="Divyansh Falodiya"
                        style={{
                            borderRadius: "50%",
                            width: "100%",
                            maxWidth: 300,
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-offset="120"
                >
                    <Typography color="text.disabled" variant="h6">
                        With a keen interest in developing products, I have
                        invested much of my time understanding and working with
                        technologies involving the{" "}
                        <Typography variant="span" color="primary">
                            Web
                        </Typography>
                        .
                    </Typography>
                    <Typography
                        color="text.disabled"
                        variant="h6"
                        sx={{ mt: 2 }}
                    >
                        I have worked not only on the Web but also on{" "}
                        <Typography variant="span" color="primary">
                            Native Android Development
                        </Typography>{" "}
                        using Kotlin as well as{" "}
                        <Typography variant="span" color="primary">
                            Machine Learning
                        </Typography>{" "}
                        for quite some time.
                    </Typography>
                    <Resume />
                </Grid>
                <Grid item xs={12} sm={6} />
            </Grid>
        </FullHeight>
    );
};

export default About;
