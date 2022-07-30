import { animated, useTransition } from "@react-spring/web";

// Horizontal Spanner Animation
const Spanner = ({ text, hover = false, delay = 0, style = {} }) => {
    const transitions = useTransition(hover, {
        from: { x: "-100%", x1: "-100%" },
        enter: { x: "0", x1: "0" },
        leave: { x: "100%", x1: "100%" },
        delay: delay,
        config: { duration: 500 },
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
                        ...style,
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
