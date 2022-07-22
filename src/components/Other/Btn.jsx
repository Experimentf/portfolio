import { Button } from "@mui/material";
import { useState } from "react";
import Spanner from "../Spanner/Spanner";

const Btn = ({ title, ...props }) => {
    const [hover, setHover] = useState(false);

    return (
        <Button
            className="cursor-active"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{ textTransform: "none", fontFamily: "Anton", mt: 5 }}
            variant="contained"
            {...props}
        >
            <Spanner text={title} hover={hover} />
        </Button>
    );
};

export default Btn;
