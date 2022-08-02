import {
    alpha,
    CardMedia,
    Grid,
    Link,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import FullHeight from "../Other/FullHeight";
import Resume from "../Resume/Resume";
import "./About.css";

const About = (props) => {
    return (
        <FullHeight {...props}>
            <Grid
                container
                justifyContent="center"
                sx={(theme) => ({
                    // background: alpha(theme.palette.common.black, 0.5),
                    borderRadius: 2,
                })}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-offset="120"
                    sx={{ p: 3 }}
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
                        color="text.secondary"
                        variant="h6"
                        sx={(theme) => ({
                            mt: 5,
                        })}
                    >
                        I am{" "}
                        <Typography
                            variant="span"
                            color="text.primary"
                            sx={(theme) => ({
                                background: `linear-gradient(to right, transparent, rgba(255,255,0,0.2), transparent)`,
                                px: 1,
                                py: 0.5,
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
                        p: 3,
                    }}
                    data-aos="zoom-in"
                    data-aos-offset="120"
                >
                    <CardMedia
                        image="/images/me2.jpg"
                        sx={{
                            borderRadius: "50%",
                            width: 300,
                            height: 300,
                            backgroundBlendMode: "multiply",
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-offset="120"
                    sx={{ p: 3 }}
                >
                    <Typography color="text.secondary" variant="h6">
                        With a keen interest in developing products, I have
                        invested much of my time understanding and working with
                        technologies involving the{" "}
                        <Typography
                            variant="span"
                            color="text.primary"
                            sx={(theme) => ({
                                background: `linear-gradient(to right, transparent, rgba(0,255,255,0.2), transparent)`,
                                px: 1,
                                py: 0.5,
                            })}
                        >
                            Web
                        </Typography>
                        .
                    </Typography>
                    <Typography
                        color="text.secondary"
                        variant="h6"
                        sx={{ mt: 2 }}
                    >
                        I have worked not only on the Web but also on{" "}
                        <Typography
                            variant="span"
                            color="text.primary"
                            sx={(theme) => ({
                                background: `linear-gradient(to right, transparent, rgba(0,255,255,0.2), transparent)`,
                                px: 1,
                                py: 0.5,
                            })}
                        >
                            Native Android Development
                        </Typography>{" "}
                        as well as{" "}
                        <Typography
                            variant="span"
                            color="text.primary"
                            sx={(theme) => ({
                                background: `linear-gradient(to right, transparent, rgba(0,255,255,0.2), transparent)`,
                                px: 1,
                                py: 0.5,
                            })}
                        >
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
