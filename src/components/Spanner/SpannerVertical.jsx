import { animated, useTransition } from "@react-spring/web";

// Vertical Spanner Animation
const SpannerVertical = ({ text, hover }) => {
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
                    <span style={{ visibility: "hidden" }}>{ch}</span>
                    <Trans hover={hover} ch={ch} idx={idx} />
                </span>
            ))}
        </>
    );
};

// Animated Component
const Trans = ({ hover, ch, idx }) => {
    const transition = useTransition(hover, {
        from: { y: "-100%", y2: "100%" },
        enter: { y: "0", y2: "0" },
        leave: { y: "-100%", y2: "100%" },
        delay: idx * 5,
    });

    return (
        <>
            {transition((styles, hov) =>
                !hov ? (
                    <animated.span
                        style={{
                            position: "absolute",
                            left: 0,
                            top: styles.y,
                        }}
                    >
                        {ch}
                    </animated.span>
                ) : (
                    <animated.span
                        style={{
                            position: "absolute",
                            left: 0,
                            top: styles.y2,
                        }}
                    >
                        {ch}
                    </animated.span>
                )
            )}
        </>
    );
};

export default SpannerVertical;
