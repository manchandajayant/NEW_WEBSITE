import React from "react";
import { Nav } from "./Nav";

const Headings = ({aboutRef}) => {
    return (
        <>
            <div className="block text-center xs:px-[6rem] xs:pt-[6rem]">
                <h2 className="text-6xl text-black xs:text-6xl">Hi, I am Jayant</h2>
                <h4 className="text-4xl my-4 text-black lg:whitespace-nowrap xs:text-xl">
                    I write software for the web
                </h4>
            </div>
            <div className="my-[1.5rem] flex xs:block xs:mx-[1rem]" id="home">
                <Nav component={"home"} aboutRef={aboutRef}/>
            </div>
            {/* <div className={`h-screen bg-tape bg-no-repeat`} style={imageStyle}></div> */}
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
