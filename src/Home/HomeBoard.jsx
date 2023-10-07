import React, { useRef, useEffect } from "react";

import { useScroll } from "../helpers/hooks/use-scroll";

import Headings from "./Headers/Headings";
import { About } from "../About/About";
import { useTransition } from "../helpers/hooks/use-transition";

import { Animator, Fade, Move, ScrollContainer, ScrollPage, Sticky, batch } from "react-scroll-motion";

export const HomeBoard = (props) => {
    const ref = useRef();
    const FadeUp = batch(Fade(), Move(0, -1000), Sticky(50, 50));
    const aboutRef = useRef();

    return (
        <div ref={ref} style={elementBackground}>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        {" "}
                        <div className="lg:my-auto" style={divStyle}>
                            <Headings aboutRef={aboutRef} />
                        </div>
                    </Animator>
                </ScrollPage>
                <div ref={aboutRef}>
                    <ScrollPage>
                        <Animator animation={FadeUp}>
                            <div>
                                <About homeRef={ref}/>
                            </div>
                        </Animator>
                    </ScrollPage>
                </div>
            </ScrollContainer>
        </div>
    );
};

const divStyle = { marginLeft: "-5%", margin: "auto" };
const elementBackground = {
    background:
        "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(213, 214, 218, 1) 100%, rgba(184, 185, 189, 0.8281906512605042) 100%, rgba(93, 97, 105, 0.13071165966386555) 100%)",
    height: "100vh",
    width: "100vw",
};
