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
        <div id="scrollableElement" ref={ref}>
            <div>
                <Headings />
            </div>
            <div>
                <About />
            </div>
        </div>
    );
};
