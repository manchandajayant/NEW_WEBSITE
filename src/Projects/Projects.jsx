import React from "react";

import { Close } from "../Components/Icons/Close";
import { WorkInfo } from "./WorkInfo";

import {
    Animator,
    Fade,
    Move,
    ScrollContainer,
    ScrollPage,
    Sticky,
    batch
} from "react-scroll-motion";
import { useTransition } from "../helpers/hooks/use-transition";

export const Projects = () => {
    const FadeUp = batch(Fade(), Move(0, -1000), Sticky(50,50));
    const { viewNavigate } = useTransition();

    return (
        <div className="h-screen bg-no-repeat h-[100vh] block gradient">
            <Close
                onClick={() => viewNavigate("/home")}
                attr={"fixed cursor-pointer m-3 text-3xl text-black left-[96%] xs:left-[84%] z-50"}
            />
            <ScrollContainer>
                {WORK_INFO.map((work, index) => {
                    return (
                        <div key={index}>
                            <div className="w-[100vw] shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] rounded-lg">
                                <ScrollPage>
                                    <Animator animation={FadeUp}>
                                        <WorkInfo work={work} />
                                    </Animator>
                                </ScrollPage>
                            </div>
                        </div>
                    );
                })}
            </ScrollContainer>
        </div>
    );
};

const WORK_INFO = [
    {
        id: 1,
        title: "Sounds Interesting",
        d: "Experience the immersive simulation of real-life environments with the app. By harnessing the power of web audio API and convolution,it brings you lifelike sounds from various physical places, allowing you to feel as if you're actually there.",
        img: "https://res.cloudinary.com/manjay/image/upload/v1687461933/Images-website/work/lt4gafqq4mjyemzny4uk.png",
        github: true,
        githubLink: "https://github.com/manchandajayant/That-sounds-interesting",
        Icons: [
            <i className="devicon-react-original colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-flask-original colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-python-plain colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-mysql-plain-wordmark colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-tailwindcss-original-wordmark colored text-[32px] m-2 xs:text-sm"></i>,
        ],
        link: "https://that-sounds-interesting.netlify.app/",
    },
    {
        id: 2,
        title: "Orah - LMS for schools",
        d: "Supervise - part of Orah's student engegment platform and learning management system. Take attendance on-the-go, manage leave requests or want to automate attendance entirely with self check-ins using 'Orah NFC tiles' or iPad kiosks – Supervise enables schools to keep track of a student's live location, reducing risk and increasing student safety.",
        img: "https://res.cloudinary.com/manjay/image/upload/v1687461933/Images-website/work/v3ibq2ppkmz7ewjuiwyr.png",
        github: false,
        Icons: [
            <i className="devicon-angularjs-plain-wordmark colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-react-original colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-typescript-plain colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-sass-original colored text-[32px] m-2 xs:text-sm"></i>,
        ],
        link: "https://www.orah.com/supervise",
    },
    {
        id: 3,
        title: "Hubhopper Audio Editor",
        d: "Feature rich browser based digital audio workstation where you can import, record, trim, split, fade in/out and a lot more written in google closure. Inspired by the demand for easy audio manipulation online.",
        img: "https://res.cloudinary.com/manjay/image/upload/v1687461932/Images-website/work/yjdrqcosw4wountsbnge.png",
        github: false,
        Icons: [<i className="devicon-javascript-plain colored text-[32px] m-2 xs:text-sm"></i>],
        link: "https://studio.hubhopper.com/editor/index.html",
    },
    {
        id: 4,
        title: "Hubhopper Studio",
        d: "A podcast hosting platform catered for the Indian creators, handling creation, RSS generation, distribution and anlytics all under one roof.",
        img: "https://res.cloudinary.com/manjay/image/upload/v1687461932/Images-website/work/ffdg0wx7eajacydlj0pv.png",
        github: false,
        Icons: [
            <i className="devicon-react-original colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-d3js-plain colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-laravel-plain-wordmark colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-mysql-plain-wordmark colored text-[32px] m-2 xs:text-sm"></i>,
        ],
        link: "https://hubhopper.com/",
    },
    {
        id: 5,
        title: "Visualisation - state of JS survey",
        d: "Transforming raw data into meaningful representations, providing a deeper understanding of the JavaScript ecosystem's state in 2020. Explore the survey findings through interactive and engaging visualizations, offering a comprehensive view of the industry trends and preferences.",
        img: "https://res.cloudinary.com/manjay/image/upload/v1687461932/Images-website/work/i2qpp9aqfvtnloged78b.png",
        github: true,
        githubLink: "https://github.com/manchandajayant/JS_DATA_SURVEY_VIS",
        Icons: [
            <i className="devicon-react-original colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-python-plain colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-d3js-plain colored text-[32px] m-2 xs:text-sm"></i>,
            <i className="devicon-nodejs-plain-wordmark colored text-[32px] m-2 xs:text-sm"></i>,
        ],
        link: undefined,
    },
];
