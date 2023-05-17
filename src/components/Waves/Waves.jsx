import React, { useRef } from "react";
import { styled } from "styled-components";

const BackgroundCanvas = styled.canvas`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

const Waves = () => {
    const canvasRef = useRef();
    return (
        <BackgroundCanvas ref={canvasRef}>
            Your browser does not support canvas
        </BackgroundCanvas>
    );
};

export default Waves;
