import React, { useContext, useRef } from "react";
import { ThemeContext, styled } from "styled-components";

const Title = styled.h1`
    position: fixed;
    font-family: Anton;
    color: ${(props) => props.color};
    font-weight: 400;
`;

const Brand = (props) => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        const element = document.querySelector("#about");
        if (element) element.scrollIntoView();
    };

    return (
        <Title
            onClick={handleClick}
            style={{ zIndex: 2, cursor: "pointer" }}
            {...props}
        >
            df
        </Title>
    );
};

export default Brand;
