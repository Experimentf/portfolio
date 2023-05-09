import { animated, useTransition } from "@react-spring/web";

// Horizontal Spanner Animation
const Spanner = ({ text, hover = false, delay = 0, style = {} }) => {
    const transitions = useTransition(hover, {
        from: { y: "-100%", y1: "100%" },
        enter: { y: "0", y1: "0" },
        leave: { y: "100%", y1: "-100%" },
        delay: delay,
        config: { duration: 300 },
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
                                        // left: styles.x,
                                        top: styles.y,
                                    }}
                                >
                                    {ch}
                                </animated.span>
                            ) : (
                                <animated.span
                                    style={{
                                        position: "absolute",
                                        // left: styles.x1,
                                        top: styles.y1,
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
