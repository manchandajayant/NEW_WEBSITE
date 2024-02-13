import React, { useRef } from "react";

import { useTransition } from "../helpers/hooks/use-transition";

import { Close } from "../Components/Icons/Close";
import { Experiments } from "./Experiments";
import { LiveMusic } from "./Live";
import { Music } from "./Music";

import { Animator, Fade, Move, ScrollContainer, ScrollPage, Sticky, batch } from "react-scroll-motion";

export const Media = () => {
    const ref = useRef();
    const { viewNavigate } = useTransition();
    const FadeUp = batch(Fade(), Move(0, -1000), Sticky(50, 50));

    return (
        <div className="h-screen bg-no-repeat h-[100vh] block gradient" ref={ref}>
            <Close onClick={() => viewNavigate("/home")} attr={"fixed cursor-pointer m-3 text-3xl text-black left-[96%] xs:left-[84%] z-50"} />
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <div className="w-[100vw] shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] rounded-lg">
                            <Experiments />
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <div className="w-[100vw] shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] rounded-lg">
                            <Music />
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <div className="w-[100vw] shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] rounded-lg">
                            <LiveMusic />
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </div>
    );
};
