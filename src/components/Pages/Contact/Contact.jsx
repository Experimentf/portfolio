import React, { useContext } from "react";
import { ReactComponent as Github } from "../../../icons/github.svg";
import { ReactComponent as Linkedin } from "../../../icons/linkedin.svg";
import { ReactComponent as Email } from "../../../icons/email.svg";
import { ReactComponent as Instagram } from "../../../icons/instagram.svg";
import { ThemeContext, styled } from "styled-components";

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
        flex-direction: column;
        .link-icon {
            width: 40px;
            height: 40px;
        }
    }
`;

const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.color};
    margin: 0 50px;
    @media (max-width: 800px) {
        flex-direction: row;
        margin: 10px 0;
        justify-content: flex-start;
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

const Contact = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <section id="contact" {...props}>
            <h1>Get in touch</h1>
            <LinkContainer className="mt-50">
                {links.map(({ title, url, Icon }) => (
                    <Link
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="react-high-scale"
                        color={theme.primary}
                    >
                        <Icon
                            className="link-icon m-10"
                            fill={theme.primary}
                            width={100}
                            height={100}
                        />
                        <h1 style={{ textAlign: "center" }}>{title}</h1>
                    </Link>
                ))}
            </LinkContainer>
        </section>
    );
};

export default Contact;
