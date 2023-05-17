import { useEffect, useState } from "react";

const useMouseMovement = (initial = { x: 0, y: 0 }) => {
    const [position, setPosition] = useState(initial);

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return position;
};

export default useMouseMovement;
