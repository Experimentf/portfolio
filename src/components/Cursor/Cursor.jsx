import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext, styled } from "styled-components";
import useMouseMovement from "../../hooks/useMouseMovement";
import { gsap } from "gsap";

const StyledSVG = styled.svg`
    position: fixed;
    mix-blend-mode: difference;
    pointer-events: none;
    z-index: 10;
`;

const reactiveClasses = [
    "react-to-cursor-text",
    "react-to-cursor-element",
    "react-to-cursor-svg",
    "react-to-cursor-hide-cursor",
    "react-high-scale",
];

const Cursor = () => {
    const theme = useContext(ThemeContext);
    const cursorRef = useRef();
    const { x, y } = useMouseMovement();

    useEffect(() => {
        const handleScale = () => {
            const hoveredElements = document.elementsFromPoint(x, y);
            const reactiveElement = hoveredElements.find(
                (element) =>
                    element.classList.contains(reactiveClasses[0]) ||
                    element.classList.contains(reactiveClasses[1]) ||
                    element.classList.contains(reactiveClasses[2]) ||
                    element.classList.contains(reactiveClasses[3]) ||
                    element.classList.contains(reactiveClasses[4])
            );
            if (!reactiveElement) return 1;
            if (
                reactiveElement.classList.contains(
                    "react-to-cursor-hide-cursor"
                )
            )
                return 0;
            if (reactiveElement.classList.contains("react-high-scale"))
                return 10;
            return 1.5;
        };

        gsap.to(cursorRef.current, {
            x: x - 25,
            y: y - 25,
            scale: handleScale(),
            duration: 0.5,
        });
    }, [x, y]);

    return (
        <StyledSVG ref={cursorRef} width={50} height={50}>
            <circle r={15} cx={25} cy={25} fill={theme.primary} />
        </StyledSVG>
    );
};

export default Cursor;
