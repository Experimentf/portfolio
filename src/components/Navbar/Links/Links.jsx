import React from "react";
import { styled } from "styled-components";

const StyledNavLinks = styled.div`
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    text-align: right;
    > * {
        cursor: pointer;
        padding: 5px;
        transition: 0.5s ease;
    }
`;

const links = [
    { id: "#about", title: "ABOUT" },
    { id: "#work", title: "WORK" },
    { id: "#contact", title: "CONTACT" },
];

const Links = (props) => {
    const handleScrollToSection = (id) => {
        const element = document.querySelector(id);
        element.scrollIntoView();
    };

    return (
        <StyledNavLinks {...props} style={{ zIndex: 2 }}>
            {links.map(({ id, title }) => (
                <div
                    key={id}
                    onClick={() => {
                        handleScrollToSection(id);
                    }}
                    className="react-to-cursor-hide-cursor nav-link-item"
                >
                    {title}
                </div>
            ))}
        </StyledNavLinks>
    );
};

export default Links;
