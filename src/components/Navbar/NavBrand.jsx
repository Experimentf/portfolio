import { Link, Typography } from "@mui/material";
import Spanner from "../Spanner/Spanner";

const NavBrand = ({ href }) => {
    return (
        <Link
            className="cursor-active-2"
            href={href}
            sx={(theme) => ({
                textDecoration: "none",
                color: theme.palette.text.primary,
            })}
        >
            <Typography fontFamily="Anton" variant="h2">
                <Spanner text="df" delay={100} />
            </Typography>
        </Link>
    );
};

export default NavBrand;
