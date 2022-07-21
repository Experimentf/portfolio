import { useSpring, animated, useTransition } from "@react-spring/web";
import { useState } from "react";

const Spanner = ({ text, hover = false }) => {
    const transitions = useTransition(hover, {
        from: { x: "-100%", x1: "-100%" },
        enter: { x: "0", x1: "0" },
        leave: { x: "100%", x1: "100%" },
    });
    const { x } = useSpring({
        from: { x: "-100%" },
        to: { x: "0" },
    });

    return (
        <>
            {text.split("").map((ch, idx) => (
                <span
                    key={idx}
                    style={{
                        position: "relative",
                        display: "inline-block",
                        overflow: "hidden",
                    }}
                >
                    {transitions((styles, hov) => (
                        <>
                            {hover ? (
                                <animated.span
                                    style={{
                                        position: "absolute",
                                        left: styles.x,
                                    }}
                                >
                                    {ch}
                                </animated.span>
                            ) : (
                                <animated.span
                                    style={{
                                        position: "absolute",
                                        left: styles.x1,
                                    }}
                                >
                                    {ch}
                                </animated.span>
                            )}
                        </>
                    ))}
                    <span style={{ visibility: "hidden" }}>{ch}</span>
                </span>
            ))}
        </>
    );
};

export default Spanner;
