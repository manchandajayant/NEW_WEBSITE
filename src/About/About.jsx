import React from "react";

import { Back } from "../Components/Icons/Back";

export const About = ({ homeRef }) => (
    <div className="h-screen text-black bg-no-repeat p-[5rem] w-[100vw] gradient xs:p-[1rem]">
        <div
            onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}
            className="cursor-pointer"
        >
            <Back />
        </div>
        <div className="flex mt-10 xs:block">
            <div className="m-auto">
                <h1 className="text-4xl xs:text-lg xs:text-center">
                    I'm Jayant Manchanda, Front end developer based out of Toronto, Canada. I transform abstract ideas
                    into functional products, to bridge the gap between conceptual thinking and practical
                    implementation.
                </h1>
                <h1 className="text-4xl xs:text-lg xs:text-center">
                    When i am not developing, I am making visual / audio media or playing music.
                </h1>
            </div>
            <div className="p-[5rem] m-auto xs:p-[3rem]">
                <img
                    src="https://res.cloudinary.com/manjay/image/upload/v1687461932/Images-website/ho8gatshdik9xcnb4kwo.jpg"
                    className="w-[60vw] h-[auto] rounded-[50%] xs:w-[35vw] xs:m-auto"
                />
            </div>
        </div>
        <div className="block">
            <div>jayantmanchanda1@gmail.com</div>
            <div className="flex gap-3 cursor-pointer mt-2">
                <a href="https://github.com/manchandajayant" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jayantmanchanda/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/jayantmanchanda/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
);
