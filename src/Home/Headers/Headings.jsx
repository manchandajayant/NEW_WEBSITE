import React from "react";
import { Nav } from "./Nav";

const Headings = () => {
    return (
        <>
            <div className="mx-[5rem] my-[1.5rem] w-[100vw] flex xs:block xs:mx-[1rem]" id="home">
                <div className="block">
                    <h2 className="text-6xl text-black xs:text-xl">Hi, I am Jayant Manchanda</h2>
                    <h4 className="text-4xl my-4 text-black lg:whitespace-nowrap xs:text-xl">Full Stack Developer based out of Toronto</h4>
                </div>
                <Nav component={"home"} />
            </div>
            <div className={`h-screen bg-tape bg-no-repeat`} style={imageStyle}></div>
        </>
    );
};

const imageStyle = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "block",
    position: "fixed",
    top: 0,
    width: "100vw",
    filter: "blur(2px)",
    zIndex: "-10",
    whiteSpace: "nowrap",
};

export default Headings;
