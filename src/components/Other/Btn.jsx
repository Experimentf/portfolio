import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useState } from "react";
import Spanner from "../Spanner/Spanner";

const Btn = ({ title, ...props }) => {
    const [hover, setHover] = useState(false);

    return (
        <Button
            className="cursor-active"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={(theme) => ({
                textTransform: "none",
                fontFamily: "Anton",
                mt: 5,
                // background: "transparent",
                // background: theme.palette.background.default,
                // color: yellow[700],
            })}
            variant="contained"
            {...props}
        >
            <Spanner text={title} hover={hover} />
        </Button>
    );
};

export default Btn;
