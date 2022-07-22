import { Box } from "@mui/material";

const FullHeight = ({ children, ...props }) => {
    return (
        <Box {...props} sx={{ ...props.sx, minHeight: "100vh" }}>
            {children}
        </Box>
    );
};

export default FullHeight;
