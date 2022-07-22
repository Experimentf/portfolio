import { Link, Typography } from "@mui/material";
import Spanner from "../Spanner/Spanner";

const NavBrand = ({ href }) => {
    return (
        <Link
            className="cursor-active"
            href={href}
            sx={(theme) => ({
                textDecoration: "none",
                color: theme.palette.text.primary,
            })}
        >
            <Typography fontFamily="Anton" variant="h2">
                <Spanner text="df" />
            </Typography>
        </Link>
    );
};

export default NavBrand;
