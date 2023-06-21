import React, { useRef, useEffect } from "react";

import { useTransition } from "../helpers/hooks/use-transition";

import { WorkInfo } from "../Projects/WorkInfo";

export const Media = () => {
    const ref = useRef();
    const { viewNavigate } = useTransition();

    useEffect(() => {
        const scrollableElement = ref.current;
        const method = (ev) => {
            ev.preventDefault();
            scrollableElement.scrollLeft += ev.deltaY + ev.deltaX;
        };
        scrollableElement.addEventListener("wheel", method);

        return () => {
            scrollableElement.addEventListener("wheel", method);
        };
    }, []);

    return (
        <div
            className="bg-slate-950 h-screen bg-[#fff] bg-no-repeat shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  h-[100vh] block"
            id="scrollableElement"
            ref={ref}
        >
            <i
                className="fa fa-times fixed left-[96%] cursor-pointer m-3 text-3xl text-black"
                aria-hidden="true"
                onClick={() => viewNavigate("/home")}
            ></i>
            {WORK_INFO.map((work, index) => {
                return (
                    <div key={index}>
                        <div className="w-[100vw]">
                            <WorkInfo work={work} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const WORK_INFO = [
    {
        title: "Sounds Interesting",
        d: "Experience the immersive simulation of real-life environments with our groundbreaking App. By harnessing the power of web audio API and convolution,it brings you lifelike sounds from various physical places, allowing you to feel as if you're actually there.",
        img: "SI.png",
        github: true,
    },
    {
        title: "Hubhopper Audio Editor",
        d: "Feature rich browser based digital audio workstation where you can import, record, trim, split, fade in/out and a lot more. Inspired by the demand for easy audio manipulation online.",
        img: "editor.png",
        github: false,
    },
    {
        title: "Hubhopper Studio",
        d: "A podcast hosting platform catered for the Indian creators, handling creation, RSS generation, distribution and anlytics all under one roof.",
        img: "hh_studio.png",
        github: false,
    },
];
