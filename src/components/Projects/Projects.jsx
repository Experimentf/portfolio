import {
    Box,
    Button,
    Card,
    CardMedia,
    Grid,
    Link,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FullHeight from "../Other/FullHeight";
import projects from "../../data/projects.json";

const Projects = (props) => {
    return (
        <FullHeight {...props}>
            <Typography variant="h2" color="text.primary">
                Projects
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
                {projects.map((pro, idx) => (
                    <Project data={pro} idx={idx} key={idx} />
                ))}
            </Box>
        </FullHeight>
    );
};

const Project = ({ data, idx }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Card key={idx} sx={{ my: 5, width: "100%" }}>
            <Grid container>
                <Grid
                    item
                    order={isSmall || idx % 2 === 0 ? 1 : 2}
                    xs={12}
                    sm={5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 5,
                    }}
                >
                    <CardMedia
                        image={"/images/projects" + data.image}
                        sx={{
                            width: "100%",
                            height: isSmall ? 200 : 300,
                            maxWidth: 400,
                            backgroundSize: "contain",
                        }}
                    />
                </Grid>
                <Grid
                    item
                    order={isSmall || idx % 2 === 0 ? 2 : 1}
                    xs={12}
                    sm={7}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: isSmall
                            ? "center"
                            : idx % 2 === 0
                            ? "flex-end"
                            : "flex-start",
                        justifyContent: "flex-start",
                        p: 5,
                    }}
                >
                    <Typography variant="h4">{data.title}</Typography>
                    <Typography variant="p" sx={{ mt: 5 }}>
                        {data.desc}
                    </Typography>
                    <Grid
                        container
                        justifyContent={
                            isSmall
                                ? "center"
                                : idx % 2 === 0
                                ? "flex-end"
                                : "flex-start"
                        }
                        sx={{ mt: 5 }}
                    >
                        {data.tech.map((cls, idx) => (
                            <Grid item key={idx} sx={{ m: 1 }}>
                                <Tooltip title={cls.split("-")[1]}>
                                    <i
                                        className={cls}
                                        style={{
                                            fontSize: "2rem",
                                        }}
                                    ></i>
                                </Tooltip>
                            </Grid>
                        ))}
                    </Grid>
                    <Link
                        href={data.link}
                        target="_blank"
                        sx={{
                            mt: 5,
                            textDecoration: "none",
                            "&:hover": {
                                "& .underline": {
                                    width: "120%",
                                },
                            },
                        }}
                    >
                        <Typography sx={{ px: 2 }}>Visit</Typography>
                        <Box
                            className="underline"
                            display="flex"
                            alignItems="center"
                            sx={{
                                width: "100%",
                                transition: "0.3s ease",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "1px",
                                    background: theme.palette.primary.main,
                                }}
                            />
                            <Box
                                sx={{
                                    position: "relative",
                                    height: "10px",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "8px",
                                        height: "1px",
                                        position: "absolute",
                                        bottom: 1,
                                        left: 0,
                                        background: theme.palette.primary.main,
                                        transform:
                                            "translate(-100%) rotate(-45deg)",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Projects;
