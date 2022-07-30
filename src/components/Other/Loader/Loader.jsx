import { Box, SvgIcon } from "@mui/material";
import "./Loader.css";

const Loader = () => {
    return (
        <Box id="page-loader">
            <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                sx={{ width: 100, height: 100 }}
            >
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path
                            id="loader-animate"
                            className="loader"
                            d="M14.77,14.28V48.49H.5V.5H19.1Q31.33.5,38.26,6.05q8.22,6.65,8.22,18,0,10.9-7,17.79t-18.1,6.89c-.87,0-2.29-.05-4.26-.14V34.53h2.29q12.48,0,12.48-10.44,0-9.81-12.27-9.81Z"
                        />
                    </g>
                </g>
            </SvgIcon>
        </Box>
    );
};

export default Loader;
