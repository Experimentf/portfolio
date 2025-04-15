import React, { useContext } from "react";
import { ThemeContext, styled } from "styled-components";
import { ReactComponent as LaptopIcon } from "./Laptop.svg";
import { ReactComponent as LocationIcon } from "./Location.svg";
import { ReactComponent as GraduateIcon } from "./Graduate.svg";
import { ReactComponent as BuildingIcon } from "./Building.svg";

const Name = styled.h1`
    font-size: 7rem;
    @media (max-width: 800px) {
        font-size: 5rem;
    }
    @media (max-width: 500px) {
        font-size: 3rem;
    }
`;

const About = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <section id="about" {...props}>
            <div className="full-height page-container">
                <Name
                    style={{ marginRight: 60, color: theme.main }}
                    className="react-high-scale"
                >
                    {"DIVYANSH".split("").map((ch, idx) => (
                        <span key={idx}>{ch}</span>
                    ))}
                </Name>
                <Name
                    style={{ marginLeft: 60, color: theme.main }}
                    className="react-high-scale"
                >
                    {"FALODIYA".split("").map((ch, idx) => (
                        <span key={idx}>{ch}</span>
                    ))}
                </Name>
            </div>
            <div
                className="full-height"
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className="mb-20">
                    <img
                        src="/images/divyanshf.png"
                        alt="Divyansh Falodiya"
                        className="react-to-cursor-hide-cursor"
                        style={{
                            maxWidth: 300,
                            width: "100%",
                            mixBlendMode: "lighten",
                            borderRadius: 20,
                        }}
                    />
                </div>
                <div
                    className="information"
                    style={{
                        width: "100%",
                        maxWidth: 500,
                    }}
                >
                    <div
                        className="scifi-container"
                        style={{ alignSelf: "flex-start" }}
                    >
                        <div className="info-container">
                            <GraduateIcon
                                fill={theme.main}
                                width={25}
                                height={25}
                            />
                            <h1 className="content">Bachelors CSE</h1>
                        </div>
                    </div>
                    <div
                        className="scifi-container"
                        style={{ alignSelf: "flex-end" }}
                    >
                        <div className="info-container">
                            <h1 className="content">IIIT Gwalior '23</h1>
                            <BuildingIcon
                                fill={theme.main}
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                    <div
                        className="scifi-container"
                        style={{ alignSelf: "flex-start" }}
                    >
                        <div className="info-container">
                            <LaptopIcon
                                fill={theme.main}
                                width={25}
                                height={25}
                            />
                            <h1 className="content">Developer</h1>
                        </div>
                    </div>
                    <div
                        className="scifi-container"
                        style={{ alignSelf: "flex-end" }}
                    >
                        <div className="info-container">
                            <h1 className="content">India</h1>
                            <LocationIcon
                                fill={theme.main}
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
