import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FullHeight from "../Other/FullHeight";
import Resume from "../Resume/Resume";

const About = (props) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <FullHeight {...props}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <Typography variant="h1" align="left" color="text.primary">
                        Hey!
                    </Typography>
                    <Typography
                        color="text.secondary"
                        variant="h6"
                        sx={{ mt: 5 }}
                    >
                        I am{" "}
                        <Typography variant="span" color="primary">
                            Divyansh Falodiya
                        </Typography>
                        . I am a student of Computer Science Engineering at
                        Indian Institute of Information Technology, Gwalior.
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
                    }}
                >
                    <img
                        src="/images/me2.jpg"
                        alt="Divyansh Falodiya"
                        style={{
                            borderRadius: "50%",
                            width: "100%",
                            maxWidth: 400,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography
                        color="text.secondary"
                        variant="h6"
                        sx={{ mt: 2 }}
                    >
                        With a keen interest in developing products, I have
                        invested much of my time understanding and working with
                        technologies involving the Web.
                    </Typography>
                    <Typography
                        color="text.secondary"
                        variant="h6"
                        sx={{ mt: 2 }}
                    >
                        I have worked not only on the Web but also on Native
                        Android Development using Kotlin as well as Machine
                        Learning for quite some time.
                    </Typography>
                    <Resume />
                </Grid>
                <Grid item xs={12} sm={6} />
            </Grid>
        </FullHeight>
    );
};

export default About;
