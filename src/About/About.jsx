import React from "react";

import { scroll } from "../helpers/methods/helper-methods";
import { Back } from "../Components/Icons/Back";

export const About = () => (
    <div className="h-screen text-black bg-no-repeat p-[5rem] w-[100vw] gradient" id="about">
        <div onClick={() => scroll("#home")} className="cursor-pointer">
            <Back/>
        </div>
        <div className="flex mt-10">
            <div className="m-auto">
                <h1 className="text-4xl">
                    I'm Jayant Manchanda, developer and audio visual media designer based out of Toronto, Canada. I
                    transform abstract ideas into functional products, to bridge the gap between conceptual thinking and
                    practical implementation.
                </h1>
            </div>
            <div className="p-[5rem] m-auto">
                <img src="/images/Jay.jpeg" style={{ width: "60vw", height: "auto", borderRadius: "50%" }} />
            </div>
        </div>
        <div className="block">
            <div>jayantmanchanda1@gmail.com</div>
            <div className="flex gap-3 cursor-pointer">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
);


