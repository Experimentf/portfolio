import { GitHub, Instagram, LinkedIn, Mail } from "@mui/icons-material";
import {
    Box,
    Grid,
    Link,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FullHeight from "../Other/FullHeight";

const Contact = (props) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const socials = [
        {
            title: "E-mail",
            link: "mailto:divyanshfofficial@gmail.com/",
            Icon: Mail,
        },
        {
            title: "LinkedIn",
            link: "https://linkedin.com/in/divyanshf/",
            Icon: LinkedIn,
        },
        {
            title: "Github",
            link: "https://github.com/DivyanshFalodiya/",
            Icon: GitHub,
        },
        {
            title: "Instagram",
            link: "https://www.instagram.com/divyansh.falodiya/",
            Icon: Instagram,
        },
    ];

    return (
        <Box {...props} sx={{ minHeight: "80vh", ...props.sx }}>
            <Typography variant="h2" color="text.primary">
                Contact
            </Typography>
            <Typography color="text.primary" align="center" sx={{ mt: 5 }}>
                I would be glad to connect on any of the socials below 😄
            </Typography>
            <Grid
                container
                justifyContent={"center"}
                alignItems="center"
                sx={{ mt: 5 }}
            >
                {socials.map(({ title, link, Icon }, idx) => (
                    <Grid item key={idx} sx={{ p: 3 }}>
                        <Link
                            href={link}
                            target="_blank"
                            sx={{
                                textDecoration: "none",
                            }}
                        >
                            <Icon
                                className="cursor-active"
                                sx={{ fontSize: isSmall ? 50 : 100 }}
                            />
                            <Typography
                                className="cursor-active"
                                align="center"
                            >
                                {title}
                            </Typography>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Contact;
