import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext, styled } from "styled-components";

const DEFAULT_STARS = 25;

const BackgroundCanvas = styled.canvas`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

const Waves = () => {
    const theme = useContext(ThemeContext);
    const canvasRef = useRef();
    const starsRef = useRef([]);
    const requestRef = useRef();

    const createStars = (width, height) => {
        starsRef.current = [];
        for (let i = 0; i < DEFAULT_STARS; i++) {
            const radius = Math.random() * 3 + 1;

            const getRandomVelocity = () => (Math.random() - 0.5) * 0.2;

            let vX = getRandomVelocity();
            while (vX === 0) vX = getRandomVelocity();
            let vY = getRandomVelocity();
            while (vY === 0) vY = getRandomVelocity();

            starsRef.current.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius,
                vX,
                vY,
            });
        }
    };

    const draw = (time) => {
        const ctx = canvasRef.current.getContext("2d");
        const width = canvasRef.current.width;
        const height = canvasRef.current.height;
        ctx.clearRect(0, 0, width, height);
        for (const star of starsRef.current) {
            star.x += star.vX;
            if (star.x <= star.radius || star.x >= width - star.radius)
                star.vX = -star.vX;
            star.y += star.vY;
            if (star.y <= star.radius || star.y >= height - star.radius)
                star.vY = -star.vY;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            ctx.fillStyle = theme.primary;
            ctx.fill();
        }
        requestRef.current = window.requestAnimationFrame(draw);
    };

    useEffect(() => {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        createStars(canvasRef.current.width, canvasRef.current.height);
        requestRef.current = window.requestAnimationFrame(draw);
    }, []);

    return (
        <BackgroundCanvas ref={canvasRef}>
            Your browser does not support canvas
        </BackgroundCanvas>
    );
};

export default Waves;
