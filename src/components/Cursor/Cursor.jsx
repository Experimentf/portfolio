import { useTheme } from "@mui/material";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";

const Cursor = () => {
    const theme = useTheme();
    const [styles, api] = useSpring(() => ({
        top: 0,
        left: 0,
        scale: 1,
        delay: 1000,
    }));
    const handleMouseMove = (e) => {
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        let scale = 1;
        for (let i = 0; i < elements.length; i++) {
            if (
                elements[i].tagName === "A" ||
                elements[i].tagName === "BUTTON"
            ) {
                scale = 1.5;
                break;
            }
        }
        api.start({ top: e.clientY, left: e.clientX, scale: scale });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <animated.div
            id="cursor"
            style={{
                position: "fixed",
                width: "50px",
                height: "50px",
                background: theme.palette.text.primary,
                zIndex: 10000,
                borderRadius: "50%",
                transform: "translate(-25px,-25px)",
                mixBlendMode: "difference",
                pointerEvents: "none",
                ...styles,
            }}
        />
    );
};

export default Cursor;
