import React from "react";

import { scroll } from "../helpers/methods/helper-methods";
import { Back } from "../Components/Icons/Back";

export const About = () => (
    <div className="h-screen text-black bg-no-repeat p-[5rem] w-[100vw] gradient xs:p-[1rem]" id="about">
        <div onClick={() => scroll("#home")} className="cursor-pointer">
            <Back/>
        </div>
        <div className="flex mt-10 xs:block">
            <div className="m-auto">
                <h1 className="text-4xl xs:text-2xl xs:text-center">
                    I'm Jayant Manchanda, developer and audio visual media designer based out of Toronto, Canada. I
                    transform abstract ideas into functional products, to bridge the gap between conceptual thinking and
                    practical implementation.
                </h1>
            </div>
            <div className="p-[5rem] m-auto xs:p-[3rem]">
                <img src="/images/Jay.jpeg" className="w-[60vw] h-[auto] rounded-[50%] xs:w-[35vw] xs:m-auto"/>
            </div>
        </div>
        <div className="block">
            <div>jayantmanchanda1@gmail.com</div>
            <div className="flex gap-3 cursor-pointer mt-2">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
);


