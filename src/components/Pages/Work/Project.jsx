import React, { useContext } from "react";
import { ThemeContext, styled } from "styled-components";
import { ReactComponent as GitHub } from "../../../icons/github.svg";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justif-content: center;
    align-items: center;
    padding: 5;
    order: ${(props) => props.order};
    @media (max-width: 800px) {
        order: 1;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 300px;
    maxwidth: 400px;
    background-size: contain;
    @media (max-width: 800px) {
        height: 200px;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.order === 0 ? "flex-end" : "flex-start")};
    text-align: ${(props) => (props.order === 0 ? "right" : "left")};
    justify-content: flex-start;
    padding: 5px;
    @media (max-width: 800px) {
        align-items: center;
        text-align: center;
    }
`;

const TechContainer = styled.div``;

const VisitLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: transparent;
    color: ${(props) => props.background};
    text-decoration: none;
    border: 2px solid ${(props) => props.background};
    transition: 0.5s ease;
    &:hover {
        color: ${(props) => props.secondary};
        background: ${(props) => props.background};
    }
    @media (max-width: 800px) {
        color: ${(props) => props.secondary};
        background: ${(props) => props.background};
    }
`;

const Project = ({ data, idx }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            key={idx}
            style={{
                padding: 20,
                marginTop: 50,
                marginBottom: 10,
                position: "relative",
                overflow: "hidden",
                background: "rgba(0,0,0,0.2)",
                borderRadius: 10,
            }}
        >
            <Container>
                <ImageContainer order={idx % 2}>
                    <Image
                        className="react-to-cursor-hide-cursor"
                        src={"/images/projects" + data.image}
                        alt={data.image}
                    />
                </ImageContainer>
                <ContentContainer order={idx % 2}>
                    <h1 style={{ color: theme.primary }}>{data.title}</h1>
                    <p className="mt-20">{data.desc}</p>
                    <TechContainer order={idx % 2} className="mt-20 mb-20">
                        {data.tech.map((cls, idx) => (
                            <div
                                key={idx}
                                className="m-10"
                                style={{ display: "inline-block" }}
                            >
                                <i
                                    className={cls}
                                    style={{
                                        fontSize: "2rem",
                                    }}
                                ></i>
                            </div>
                        ))}
                    </TechContainer>
                    {data.github && <Visit link={data.github} />}
                    {/* {data.github && (
                        <GitTag
                            github={data.github}
                            style={
                                idx % 2 === 0
                                    ? { left: -15, transform: "rotate(-45deg)" }
                                    : { right: -15, transform: "rotate(45deg)" }
                            }
                        />
                    )} */}
                    {data.original && (
                        <p className="mt-50">
                            (Inspired from{" "}
                            <a
                                href={data.original}
                                style={{ color: theme.primary }}
                                className="react-to-cursor-hide-cursor"
                            >
                                skribbl.io
                            </a>
                            )
                        </p>
                    )}
                </ContentContainer>
            </Container>
        </div>
    );
};

const Visit = ({ link }) => {
    const theme = useContext(ThemeContext);
    return (
        <VisitLink
            className="react-to-cursor-hide-cursor mt-20 mb-20"
            href={link}
            target="_blank"
            background={theme.primary}
            secondary={theme.secondary}
            rel="noreferrer"
        >
            <p sx={{ px: 2 }}>Visit</p>
        </VisitLink>
    );
};

export default Project;
