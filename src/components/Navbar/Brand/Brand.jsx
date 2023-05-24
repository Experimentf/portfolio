import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext, styled } from "styled-components";
import useMouseMovement from "../../../hooks/useMouseMovement";
import { DEFAULT_OFFSET } from "../../../contants/stickyOffset";
import { gsap } from "gsap";

const TitleContainer = styled.div`
    position: fixed;
    font-family: Anton;
    font-weight: 400;
    color: ${(props) => props.color};
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
`;

const Brand = (props) => {
    const ref = useRef();
    const initial = { x: 30, y: 30 };
    // const { x: mouseX, y: mouseY } = useMouseMovement();

    const handleClick = () => {
        const element = document.querySelector("#about");
        if (element) element.scrollIntoView();
    };

    // useEffect(() => {
    //     if (!ref) return;
    //     const width = ref.current.offsetWidth;
    //     const height = ref.current.offsetHeight;
    //     const diffX = Math.abs(initial.x + width / 2 - mouseX);
    //     const diffY = Math.abs(initial.y + height / 2 - mouseY);
    //     const flag = diffX <= DEFAULT_OFFSET && diffY <= DEFAULT_OFFSET;
    //     const left = flag ? mouseX - width / 2 : initial.x;
    //     const top = flag ? mouseY - height / 2 : initial.y;
    //     gsap.to(ref.current, {
    //         left,
    //         top,
    //         duration: 0.5,
    //     });
    // }, [mouseX, mouseY]);

    return (
        <TitleContainer
            ref={ref}
            onClick={handleClick}
            left={initial.x}
            top={initial.y}
            style={{ zIndex: 2, cursor: "pointer" }}
            {...props}
        >
            <h1>df</h1>
        </TitleContainer>
    );
};

export default Brand;
