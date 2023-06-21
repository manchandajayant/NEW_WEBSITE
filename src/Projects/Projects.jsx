import React, { useRef, useEffect } from "react";

import { useTransition } from "../helpers/hooks/use-transition";
import { useScroll } from "../helpers/hooks/use-scroll";

import { WorkInfo } from "./WorkInfo";
import { Close } from "../Components/Icons/Close";

export const Projects = () => {
    const ref = useRef();
    const { viewNavigate } = useTransition();

    const { scroll } = useScroll();

    useEffect(() => {
        scroll(ref);
    }, []);

    return (
        <div className="h-screen bg-no-repeat h-[100vh] block gradient" id="scrollableElement" ref={ref}>
            <Close
                onClick={() => viewNavigate("/home")}
                attr={"fixed left-[96%] cursor-pointer m-3 text-3xl text-black"}
            />
            {WORK_INFO.map((work, index) => {
                return (
                    <div key={index}>
                        <div className="w-[100vw] shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] rounded-lg">
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
        Icons: [
            <i className="devicon-react-original colored text-[32px] m-2"></i>,
            <i className="devicon-flask-original colored text-[32px] m-2"></i>,
            <i class="devicon-python-plain colored text-[32px] m-2"></i>,
            <i class="devicon-mysql-plain-wordmark colored text-[32px] m-2"></i>,
            <i class="devicon-tailwindcss-original-wordmark colored text-[32px] m-2"></i>
        ],
    },
    {
        title: "Orah - LMS for schools",
        d: "Supervise - part of Orah's student engegment platform and learning management system. Take attendance on-the-go, manage leave requests or want to automate attendance entirely with self check-ins using 'Orah NFC tiles' or iPad kiosks – Supervise enables schools to keep track of a student's live location, reducing risk and increasing student safety.",
        img: "orah-s.png",
        github: false,
        Icons: [
            <i class="devicon-angularjs-plain-wordmark colored text-[32px] m-2"></i>,
            <i className="devicon-react-original colored text-[32px] m-2"></i>,
            <i class="devicon-typescript-plain colored text-[32px] m-2"></i>,
            <i class="devicon-sass-original colored text-[32px] m-2"></i>,
        ],
    },
    {
        title: "Hubhopper Audio Editor",
        d: "Feature rich browser based digital audio workstation where you can import, record, trim, split, fade in/out and a lot more written in google closure. Inspired by the demand for easy audio manipulation online.",
        img: "editor.png",
        github: false,
        Icons: [<i class="devicon-javascript-plain colored text-[32px] m-2"></i>],
    },
    {
        title: "Hubhopper Studio",
        d: "A podcast hosting platform catered for the Indian creators, handling creation, RSS generation, distribution and anlytics all under one roof.",
        img: "hh_studio.png",
        github: false,
        Icons:[
            <i className="devicon-react-original colored text-[32px] m-2"></i>,
            <i class="devicon-d3js-plain colored text-[32px] m-2"></i>,
            <i class="devicon-laravel-plain-wordmark colored text-[32px] m-2"></i>,
            <i class="devicon-mysql-plain-wordmark colored text-[32px] m-2"></i>
          ]
    },
    {
        title: "Visualisation - state of JS survey",
        d: "Transforming raw data into meaningful representations, providing a deeper understanding of the JavaScript ecosystem's state in 2020. Explore the survey findings through interactive and engaging visualizations, offering a comprehensive view of the industry trends and preferences.",
        img: "js-vis.png",
        github: true,
        Icons:[
            <i className="devicon-react-original colored text-[32px] m-2"></i>,
            <i class="devicon-python-plain colored text-[32px] m-2"></i>,
            <i class="devicon-d3js-plain colored text-[32px] m-2"></i>,
            <i class="devicon-nodejs-plain-wordmark colored text-[32px] m-2"></i>
        ]
    },
];
