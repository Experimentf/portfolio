import React, { useContext } from "react";
import { ThemeContext, styled } from "styled-components";
import { ReactComponent as Github } from "../../../icons/github.svg";
import { ReactComponent as Linkedin } from "../../../icons/linkedin.svg";
import { ReactComponent as Email } from "../../../icons/email.svg";
import { ReactComponent as Instagram } from "../../../icons/instagram.svg";

const StyledSocials = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 30px;
    bottom: 0;
    color: ${(props) => props.color};
    @media (max-width: 768px) {
        display: none;
    }
`;

const links = [
    {
        title: "Github",
        url: "https://github.com/divyanshf/",
        Icon: Github,
    },
    {
        title: "Linkedin",
        url: "https://linkedin.com/in/divyanshf/",
        Icon: Linkedin,
    },
    {
        title: "Email",
        url: "mailto:divyanshfofficial@gmail.com",
        Icon: Email,
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/divyansh.falodiya/",
        Icon: Instagram,
    },
];

const Socials = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <StyledSocials color={theme.main} {...props} style={{ zIndex: 2 }}>
            {links.map(({ url, Icon }) => (
                <a key={url} href={url} target="_blank" rel="noreferrer">
                    <svg width={25} height={25} className="react-to-cursor-svg">
                        <Icon
                            fill={theme.main}
                            style={{ transition: "0.5s ease" }}
                        />
                    </svg>
                </a>
            ))}
        </StyledSocials>
    );
};

export default Socials;
