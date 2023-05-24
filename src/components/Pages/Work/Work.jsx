import jobs from "../../../data/work.json";
import projects from "../../../data/projects.json";
import { useContext } from "react";
import { ThemeContext, styled } from "styled-components";
import { ReactComponent as CalendarIcon } from "./Calendar.svg";
import Project from "./Project";

const Card = styled.div`
    maxwidth: 300px;
    overflow: hidden;
    border-radius: 10px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    @media (max-width: 800px) {
        grid-column: 1 / span 3;
    }
`;

// jobs
const Work = ({ ...props }) => {
    const theme = useContext(ThemeContext);

    return (
        <section id="work" {...props}>
            <div>
                <h1 style={{ color: theme.main }}>Works</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 20,
                    }}
                    className="mt-20"
                >
                    {jobs.map((work, idx) => (
                        <Item data={work} idx={idx} key={idx} />
                    ))}
                </div>
            </div>
            <div className="mt-50">
                <h1 style={{ color: theme.main }}>Projects</h1>
                <div>
                    {projects.map((project, idx) => (
                        <Project data={project} idx={idx} key={idx} />
                    ))}
                </div>
                <p
                    style={{
                        marginTop: 100,
                        width: "100%",
                        display: "block",
                        color: theme.main,
                        textAlign: "center",
                    }}
                >
                    To view more of my projects, please visit my{" "}
                    <a
                        href="https://github.com/divyanshf"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: theme.primary,
                        }}
                        className="react-to-cursor-hide-cursor"
                    >
                        Github
                    </a>
                </p>
            </div>
        </section>
    );
};

// Each work item
const Item = ({ data, idx }) => {
    const theme = useContext(ThemeContext);

    return (
        <Card key={idx}>
            <div className="p-5">
                <div
                    style={{ display: "flex", alignItems: "flex-start" }}
                    className="mb-20"
                >
                    <img
                        src={"/images/work" + data.logo}
                        alt={data.logo}
                        style={{
                            width: 100,
                            borderRadius: 10,
                        }}
                    />
                    <div className="ml-20">
                        <h2 className="mb-10">{data.company}</h2>
                        <h4 style={{ color: theme.primary }}>{data.title}</h4>
                    </div>
                </div>
                <div
                    className="flex"
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <CalendarIcon fill={theme.main} width={25} height={25} />
                    <p>{data.duration}</p>
                </div>
                <br />
                <p>({data.type})</p>
                <br />
                <div>
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
                </div>
            </div>
        </Card>
    );
};

export default Work;
