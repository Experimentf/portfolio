import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";
import Spanner from "../Spanner/Spanner";

const NavLink = ({ href, title }) => {
    const [hover, setHover] = useState(false);
    return (
        <Link
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href={href}
            sx={(theme) => ({
                textDecoration: "none",
                color: theme.palette.text.primary,
                mx: 1,
            })}
        >
            <Typography fontFamily="Anton" fontSize="1rem">
                <Spanner text={title} hover={hover} />
            </Typography>
            <Box
                sx={(theme) => ({
                    width: "100%",
                    height: "1px",
                    background: theme.palette.text.primary,
                    transform: `scale(${hover ? 1 : 0})`,
                    transition: "0.5s ease",
                })}
            />
        </Link>
    );
};

export default NavLink;
