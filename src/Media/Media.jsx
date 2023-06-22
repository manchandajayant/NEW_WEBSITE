import React, { useRef, useEffect } from "react";

import { useTransition } from "../helpers/hooks/use-transition";

import { LiveMusic } from "./Live";
import { Close } from "../Components/Icons/Close";
import { useScroll } from "../helpers/hooks/use-scroll";
import { Music } from "./Music";
import { Experiments } from "./Experiments";

export const Media = () => {
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
                attr={"fixed cursor-pointer m-3 text-3xl text-black left-[96%] xs:left-[84%]"}
            />
            <div className="w-[100vw] shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] rounded-lg">
                <Music />
            </div>
            <div className="w-[100vw] shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] rounded-lg">
                <LiveMusic />
            </div>
            <div className="w-[100vw] shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] rounded-lg">
                <Experiments />
            </div>
        </div>
    );
};
