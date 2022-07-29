import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";
import Spanner from "../Spanner/Spanner";
import isTouch from "../../helpers/isTouch";

const NavLink = ({
    href,
    title,
    handleClose = () => {},
    sx = {},
    styles = {},
}) => {
    const [hover, setHover] = useState(false);
    const canTouch = isTouch();
    return (
        <Link
            className="cursor-active-2"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href={href}
            sx={(theme) => ({
                textDecoration: "none",
                color: theme.palette.text.primary,
                mx: 1,
                ...styles,
            })}
            onClick={handleClose}
        >
            <Typography
                fontFamily="Anton"
                fontSize="1rem"
                sx={{ width: "100%", ...sx }}
            >
                <Spanner text={title} hover={hover} delay={100} />
            </Typography>
            {!canTouch && (
                <Box
                    sx={(theme) => ({
                        width: "100%",
                        height: "1px",
                        background: theme.palette.text.primary,
                        transform: `scale(${hover ? 1 : 0})`,
                        transition: "0.5s ease",
                    })}
                />
            )}
        </Link>
    );
};

export default NavLink;
