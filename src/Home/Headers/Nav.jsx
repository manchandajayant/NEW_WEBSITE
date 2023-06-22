import React from "react";

import { useTransition } from "../../helpers/hooks/use-transition";

import { scroll } from "../../helpers/methods/helper-methods";
import { Code } from "../../Components/Icons/Icons";
import { Home } from "../../Components/Icons/Home";
import { Person } from "../../Components/Icons/Person";
import { SquareWave } from "../../Components/Icons/SquareWave";

export const Nav = ({ padding, color, component }) => {
    const Color = color ? "[" + color + "]" : "black";
    const Padding = padding ? padding : "8";
    const options = getOptions(Color, component);
    const { viewNavigate } = useTransition();

    return (
        <div className={`mx-[10rem] my-[${Padding}rem] w-full xs:mx-[0]`}>
            <div className="px-1 cursor-pointer flex justify-evenly gap-4">
                {options.map((option, index) => {
                    if (option.heading === "Work") {
                        return (
                            <div
                                onClick={() => viewNavigate("/projects")}
                                key={index}
                                className="text-[16px] hover:text-[24px] xs:text-[8px] xs:hover:text-[16px]"
                            >
                                <Code />
                                <h3 className={`text-${Color} xs:text-base`}>{option.heading}</h3>
                            </div>
                        );
                    }
                    if (option.heading === "Media") {
                        return (
                            <div
                                onClick={() => viewNavigate("/media")}
                                key={index}
                                className="text-[16px] hover:text-[24px] xs:text-[8px] xs:hover:text-[16px]"
                            >
                                <SquareWave />
                                <h3 className={`text-${Color} xs:text-base`}>{option.heading}</h3>
                            </div>
                        );
                    }
                    return (
                        <div onClick={() => scroll(option.link)} className="text-[16px] hover:text-[24px] xs:text-[8px] xs:hover:text-[16px]" key={index}>
                            {option.iconClass ? <i className={option.iconClass}></i> : option.icon}
                            <h3 className={`text-${Color} xs:text-base`}>{option.heading}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const getOptions = (Color, component) => {
    const project = { heading: "Work", iconClass: `fa-solid fa-code text-${Color}`, link: "#project" };
    const media = { heading: "Media", icon: <SquareWave />, link: "#media" };
    const about = { heading: "About", icon: <Person />, link: "#about" };
    const home = { heading: "Home", icon: <Home />, link: "#home" };
    switch (component) {
        case "about":
            return [home, project, media];
        case "media":
            return [home, project, about];
        case "project":
            return [home, media, about];
        case "home":
            return [project, media, about];
        default:
            return [project, media, about];
    }
};
