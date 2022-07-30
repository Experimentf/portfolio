import { Box, Card, CardMedia, Grid, Tooltip, Typography } from "@mui/material";
import works from "../../data/work.json";

// Works
const Work = ({ ...props }) => {
    return (
        <Box {...props}>
            <Typography variant="h2" color="text.primary">
                Work
            </Typography>
            {works.map((work, idx) => (
                <Item data={work} idx={idx} key={idx} />
            ))}
        </Box>
    );
};

// Each work item
const Item = ({ data, idx }) => {
    return (
        <Card
            key={idx}
            sx={{
                my: 10,
                width: "100%",
                position: "relative",
                overflow: "hidden",
            }}
            data-aos="fade-in"
            data-aos-once="false"
        >
            <Box sx={{ p: 5 }}>
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <CardMedia
                        image={"/images/work" + data.logo}
                        sx={{
                            width: 50,
                            height: 50,
                            maxWidth: 400,
                            borderRadius: 2,
                            mr: 2,
                        }}
                    />
                    <Typography variant="h6">{data.company}</Typography>
                </Box>
                <Typography variant="h4">{data.title}</Typography>
                <Typography variant="caption">{data.duration}</Typography>
                <br />
                <Typography variant="caption">({data.type})</Typography>
                <br />
                <Typography sx={{ my: 2, fontSize: 17 }}>
                    {data.desc}
                </Typography>
                <Grid container justifyContent={"flex-start"}>
                    {data.tech.map((cls, idx) => (
                        <Grid
                            item
                            key={idx}
                            sx={{ m: 1 }}
                            data-aos="zoom-in"
                            data-aos-once="false"
                        >
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
            </Box>
        </Card>
    );
};

export default Work;
