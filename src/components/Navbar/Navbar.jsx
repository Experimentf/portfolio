import React from "react";
import Brand from "./Brand/Brand";
import Socials from "./Socials/Socials";
import Links from "./Links/Links";

const Navbar = () => {
    return (
        <>
            <Brand className="react-to-cursor-text" />
            <Socials className="m-30 hide-on-mobile" />
            <Links className="m-30" />
        </>
    );
};

export default Navbar;
