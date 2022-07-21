import { useTheme } from "@mui/material";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";

const Cursor = () => {
    const theme = useTheme();
    const [styles, api] = useSpring(() => ({
        top: 0,
        left: 0,
        scale: 1,
        background: theme.palette.text.primary,
        delay: 1000,
    }));
    const handleMouseMove = (e) => {
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        let opt = [
            {
                scale: 1,
                background: theme.palette.text.primary,
            },
            {
                scale: 1.5,
                background: theme.palette.primary.main,
            },
        ];
        let choice = 0;
        for (let i = 0; i < elements.length; i++) {
            if (
                elements[i].tagName === "A" ||
                elements[i].tagName === "BUTTON"
            ) {
                choice = 1;
                break;
            }
        }
        api.start({
            top: e.clientY,
            left: e.clientX,
            ...opt[choice],
        });
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
                pointerEvents: "none",
                mixBlendMode: "difference",
                ...styles,
            }}
        />
    );
};

export default Cursor;
