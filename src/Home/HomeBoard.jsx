import React, { useRef, useEffect } from "react";

import { useScroll } from "../helpers/hooks/use-scroll";

import Headings from "./Headers/Headings";
import { About } from "../About/About";


export const HomeBoard = (props) => {
    const ref = useRef();
    const { scroll } = useScroll();

    useEffect(() => {
        scroll(ref);
    }, []);

    return (
        <div id="scrollableElement" ref={ref} style={{background:"linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(213, 214, 218, 1) 100%, rgba(184, 185, 189, 0.8281906512605042) 100%, rgba(93, 97, 105, 0.13071165966386555) 100%);"}}>
            <div className="lg:my-auto" style={{marginLeft:"-5%"}}>
                <Headings />
            </div>
            <div>
                <About />
            </div>
        </div>
    );
};

